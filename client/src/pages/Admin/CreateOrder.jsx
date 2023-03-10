
import { Space, Table, Tag } from 'antd';
import Layout from '../../components/Layout';
const { Column, ColumnGroup } = Table;
// const FormDisabledDemo = () => {

const CreateOrder = () => {
  const data = [
    {
      key: '1',
      firstName: 'John',
      lastName: 'Brown',
      address: 'New York No. 1 Lake Park',
      purchase: 'CPU Processor',
      date: '2023-3-8',
    },
    {
      key: '2',
      firstName: 'Jim',
      lastName: 'Green',
      address: 'London No. 1 Lake Park',
      purchase: 'CPU Processor',
      date: '2023-3-8',
    },
    {
      key: '3',
      firstName: 'Joe',
      lastName: 'Black',
      address: 'Sydney No. 1 Lake Park',
      purchase: 'CPU Processor',
      date: '2023-3-8',
    },
  ];
  return (
    <Layout>
      <h1 className='table-header'>Order List</h1>
      <div>
        <Table dataSource={data}>
          <ColumnGroup title="Name">
            <Column title="First Name" dataIndex="firstName" key="firstName" />
            <Column title="Last Name" dataIndex="lastName" key="lastName" />
          </ColumnGroup>
          {/* <Column title="Age" dataIndex="age" key="age" /> */}
          <Column title="Address" dataIndex="address" key="address" />

          <Column title="Product Purchase" dataIndex="purchase" key="Product Purchase" />
          <Column
            title="Purchase Date"
            key="date"
            dataIndex={"date"}
          />

          <Column
            title="Delivery Date"
            key="action"
            dataIndex={"date"}
          />
        </Table>
      </div>
    </Layout>
  )
}

export default CreateOrder

