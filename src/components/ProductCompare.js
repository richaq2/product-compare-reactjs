import React, { useState } from "react";
import { Card, Row, Col, Button, Modal, Table } from "antd";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { useEffectProducts } from "./utils";

function CompareProduct({ compareList, onRemoveProduct, addToCompare }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  

  useEffectProducts(setLoading, setDataSource);

  const columns = [
    {
      key: "title",
      title: "Title",
      dataIndex: "title",
    },
    {
      key: "description",
      title: "Description",
      dataIndex: "description",
    },
    {
      key: "price",
      title: "Price",
      dataIndex: "price",
      sorter: (record1, record2) => record1.price > record2.price,
      render: (text) => <p>{text}$</p>,
    },
    {
      key: "brand",
      title: "Brand",
      dataIndex: "brand",
    },
    {
      key: "category",
      title: "Category",
      dataIndex: "category",
    },
    {
      key: "thumbnail",
      title: "Image",
      dataIndex: "thumbnail",
      render: (text) => (
        <img src={text} alt="thumbnail" style={{ width: 50 }} />
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Button
          key={record.id}
          type="primary"
          icon={<PlusOutlined />}
          size="md"
          onClick={() => addToCompare(record)}
          disabled={
            compareList.length >= 4 ||
            compareList.some((product) => product.id === record.id)
          } // Disable if already added or list is full
        >
          Add
        </Button>
      ),
    },
  ];

  const showModal = () => {

    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

//   const handleAddToCompare = (product) => {
//     if (compareList.length < 4) {
//       addToCompare(product);
//     } else {
//       alert("You can only compare up to 4 products.");
//     }
//   };

  return (
    <div className="container">
      <h2>Compare Products</h2>
      <Row gutter={16}>
        {compareList.map((product, index) => (
          <Col span={6} key={product.id}>
            <Card
              title={product.title}
              extra={
                <Button
                  type="danger"
                  icon={<DeleteOutlined />}
                  onClick={() => onRemoveProduct(product.id)}
                />
              }
            >
              <p>
                <strong>Price:</strong> {product.price}$
              </p>
              <p>
                <strong>Discount:</strong> {product.discountPercentage}%
              </p>
              <p>
                <strong>Brand:</strong> {product.brand}
              </p>
              <p>
                <strong>Category:</strong> {product.category}
              </p>
              <img
                src={product.thumbnail}
                alt={product.title}
                style={{ width: "100%" }}
              />
            </Card>
          </Col>
        ))}
      </Row>
      {compareList.length < 4 && (
        <Button
          type="primary"
          onClick={showModal}
          style={{ marginTop: "20px" }}
        >
          Add More
        </Button>
      )}
      <Modal
        title="Add More Products"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={800}
      >
        <Table
          loading={loading}
          columns={columns}
          dataSource={dataSource}
          pagination={true}
          rowKey="id"
        />
      </Modal>
      {compareList.length === 0 && <p>No products selected for comparison.</p>}
    </div>
  );
}

export default CompareProduct;
