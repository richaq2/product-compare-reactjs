import { Table, Button } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { columnsData, useEffectProducts } from "./utils";

function ProductDetail({ addToCompare, addedProducts, removeFromCompare}) {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);


  useEffectProducts(setLoading, setDataSource);

  const columns = columnsData(addedProducts, addToCompare,removeFromCompare);

  return (
    <>
      <div className="container ">
        <Link to="/product-compare">
          <Button type="primary" style={{ margin: "20px 0px" }}>
           View Compare Products
          </Button>
        </Link>
        <Table
          loading={loading}
          columns={columns}
          dataSource={dataSource}
          pagination={true}
          rowKey="id"
        />
      </div>
    </>
  );
}

export default ProductDetail;
