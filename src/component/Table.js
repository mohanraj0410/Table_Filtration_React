import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Select, Table } from 'antd';
const columns = [
    {
        title: 'S.no',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'UserId',
        dataIndex: 'userId',
        key: 'userId',
    },
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'Status',
        dataIndex: 'completed',
        key: 'completed',
        render: status => {
            return <p>{status == true ? <p style={{ color: "green" }}>Completed</p> : <p style={{ color: "red" }}>Pending...</p>}</p>
        }

    }


];

const TablePage = () => {
    const [tableData, setTableData] = useState([])
    const [filterTableData, setFilterTableData] = useState([])
    const [selectedNumber, setSelectedNumber] = useState(1)
    const [completedCheck, setCompletedCheck] = useState(true)
    const [pendingCheck, setPendingCheck] = useState(true)





    const fetchData = async () => {
        let data = await fetch("https://jsonplaceholder.typicode.com/todos")
        let json = await data.json()
        setTableData(json)
        setFilterTableData(json)
    }



    const handleSelectedChange = (value) => {
        // console.log(value);
        setSelectedNumber(value)
    };
    // console.log(selectedNumber)


    const onChangeCompleted = () => {
        // console.log(`Completed checked = ${e.target.checked}`);
        setCompletedCheck(!completedCheck)
    };
    // console.log(completedCheck)


    const onChangePending = () => {
        // console.log(`Pending checked = ${e.target.checked}`);
        setPendingCheck(!pendingCheck)
    };
    // console.log(pendingCheck)



    // let checkTrue = pendingCheck == true && completedCheck == true
    // let checkFalse = pendingCheck == false && completedCheck == false

    // let completed = checkTrue ? "" : pendingCheck == false && completedCheck == true ? `&completed=true` : pendingCheck == true && completedCheck == false ? `&completed=false` : ""

    // console.log(completed)

    // console.log(tableData)


    const handleSubmit = () => {
        const filtered = tableData.filter(task => {
            if (selectedNumber && task.userId !== selectedNumber) {
                return false;
            }
            if (!completedCheck && task.completed) {
                return false;
            }
            if (!pendingCheck && !task.completed) {
                return false;
            }
            return true;
        });
        setFilterTableData(filtered);
    };

    // const filterFunction=(data)=>{
    //     if (data.userId == selectedNumber) {
    // console.log(data)
    //     }
    // }


    // const handleSubmit = () => {
    //     if (checkTrue) {
    // console.log("yy")
    //         tableData.filter((data) => {
    //             filterFunction(data)
    //         })
    //     }
    // }
    // console.log(filterTableData)

    useEffect(() => {
        fetchData()
        // filterFunction()
    }, [])


    // const handleSubmit = async () => {
    //     if (checkFalse) {
    //         setTableData([])
    //     }
    //     else {
    //         let data = await fetch(`https://jsonplaceholder.typicode.com/todos/?userId=${selectedNumber}${completed}`)
    //         let json = await data.json()
    //         setTableData(json)
    //     }
    // }


    // const handleSubmit = async () => {
    //     if (checkTrue) {
    //         let data = await fetch(`https://jsonplaceholder.typicode.com/todos/?userId=${selectedNumber}`)
    //         let json = await data.json()
    //         setTableData(json)
    //     }
    //     else if (pendingCheck == false && completedCheck == true) {
    //         let data = await fetch(`https://jsonplaceholder.typicode.com/todos/?userId=${selectedNumber}&completed=true`)
    //         let json = await data.json()
    //         setTableData(json)
    //     }
    //     else if (pendingCheck == true && completedCheck == false) {
    //         let data = await fetch(`https://jsonplaceholder.typicode.com/todos/?userId=${selectedNumber}&completed=false`)
    //         let json = await data.json()
    //         setTableData(json)
    //     }
    //     else if (checkFalse) {
    //         setTableData([])
    //     }
    // }
    // https://jsonplaceholder.typicode.com/todos/?userId=2&completed=false
    // console.log(tableData.length)

    return (
        <div className='tableContainer'>
            <h1 style={{ textAlign: "center" }}>Number of List: {filterTableData.length}</h1>
            <div className='filterContainer'>
                <Checkbox checked={completedCheck} onChange={onChangeCompleted}>Completed</Checkbox>
                <Checkbox checked={pendingCheck} onChange={onChangePending}>Pending</Checkbox>
                <Select
                    defaultValue="1"
                    style={{
                        width: 120,
                        margin: 10,
                    }}
                    onChange={handleSelectedChange}
                    // optionFilterProp="children"
                    // filterOption={(input, option) => (option?.label ?? '').includes(input)}
                    // filterSort={(optionA, optionB) =>
                    //     (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                    // }
                    options={
                        [
                            {
                                value: 1,
                                label: 1,
                            },
                            {
                                value: 2,
                                label: 2,
                            },
                            {
                                value: 3,
                                label: 3,
                            },
                            {
                                value: 4,
                                label: 4,
                            },
                            {
                                value: 5,
                                label: 5,
                            },
                            {
                                value: 6,
                                label: 6,
                            },
                            {
                                value: 7,
                                label: 7,
                            },
                            {
                                value: 8,
                                label: 8,
                            },
                            {
                                value: 9,
                                label: 9,
                            },
                            {
                                value: 10,
                                label: 10,
                            },
                        ]}
                />
                <Button type="primary" onClick={handleSubmit}>Search</Button>
            </div>
            <Table columns={columns} dataSource={filterTableData} />
        </div>
    )
};
export default TablePage;