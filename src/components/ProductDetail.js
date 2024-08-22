import { Table, Button ,Flex} from "antd";
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
      <Flex gap="middle" align="center" vertical>
        <Link to="/product-compare">
          <Button type="primary" style={{ margin: "20px 0px" }}>
           View Compare Products
          </Button>
        </Link>
      </Flex>
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
