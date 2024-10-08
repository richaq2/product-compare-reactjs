import React from "react";
import { useEffect } from "react";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button,Tooltip } from "antd";

export const columnsData = (addedProducts, handleAddToCompare,removeFromCompare  ) => [
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
    render: (text) => <img src={text} alt="thumbnail" style={{ width: 50 }} />,
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      addedProducts.includes(record.id) ? (
        <Tooltip title="remove" color='gray'>
        <Button
          type="danger"
          icon={<DeleteOutlined style={{
            color:'red'
          }} />}
          onClick={() => removeFromCompare(record.id)}
        />
        </Tooltip>
      ) : (
      

        <Button
          key={record.id}
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => handleAddToCompare(record)}
          disabled={addedProducts.includes(record.id)} // Disable if product is already added
          size="md"
          >
          Compare
        </Button>
         
          )
        ),
    
  },
];

export const useEffectProducts = (setLoading, setDataSource) => {
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
  }, [setLoading, setDataSource]);
};
