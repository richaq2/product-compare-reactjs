import { Table, Button } from "antd";
import { useState, useEffect } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function ProductDetail({ addToCompare }) {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [addedProducts, setAddedProducts] = useState([]);

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
      sorter: (record1, record2) => {
        return record1.price > record2.price;
      },
      render: (text) => <p>{text}$</p>,
    },
    {
      key: "discountPercentage",
      title: "Discount Percentage",
      dataIndex: "discountPercentage",
      render: (text) => <p>{text}%</p>,
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
      filters: [
        { text: "beauty", value: "beauty" },
        { text: "fragrances", value: "fragrances" },
        { text: "furniture", value: "furniture" },
        { text: "groceries", value: "groceries" },
      ],
      onFilter: (value, record) => {
        return record.category === value;
      },
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
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => handleAddToCompare(record)}
          disabled={addedProducts.includes(record.id)} // Disable if product is already added
          size="md"
        >
          Compare
        </Button>
      ),
    },
  ];

  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setDataSource(data.products);
      })
      .catch((error) => {
        console.log("data not found", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  

  const handleAddToCompare = (product) => {
    addToCompare(product);
    setAddedProducts([...addedProducts, product.id]);
  };

  return (
    <div className="container ">
      <Link to="/product-compare">
        <Button type="primary" style={{ marginTop: "20px" }}>
          Go to Compare Products
        </Button>
      </Link>
      <Table
        loading={loading}
        columns={columns}
        dataSource={dataSource}
        pagination={true}
      />
    </div>
  );
}

export default ProductDetail;
