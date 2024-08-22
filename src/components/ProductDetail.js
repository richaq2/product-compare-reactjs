import { Table } from "antd";
import { useState, useEffect } from "react";

function ProductDetail() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

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
      filters:[
        {text:'beauty',value:'beauty'},
        {text:'fragrances',value:'fragrances'},
        {text:'furniture',value:'furniture'},
        {text:'groceries',value:'groceries'},

      ],
      onFilter:(value,record) =>{
        return record.category === value
      }
    },
    {
      key: "thumbnail",
      title: "Image",
      dataIndex: "thumbnail",
      render: (text) => (
        <img src={text} alt="thumbnail" style={{ width: 50 }} />
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

  return (
    <div
      className="container d-flex flex-row justify-content-center"
      style={{
        flexWrap: "wrap",
      }}
    >
      <Table
        loading={loading}
        columns={columns}
        dataSource={dataSource}
        pagination={true}
      ></Table>
    </div>
  );
}

export default ProductDetail;
