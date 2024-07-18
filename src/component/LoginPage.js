import React from 'react';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { useFormik } from 'formik';
import basicSchema from './formValidate';
import { useNavigate } from 'react-router-dom';
const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
const LoginPage = () => {

    const navigate = useNavigate()

    const onSubmit = async (action, values) => {
        console.log(action)
        // alert("The login page is successfully completed");
        navigate("/table")
        message.open({
            type: 'success',
            content: 'Successfully Login',
        });
        action.resetForm();
    };


    const { values, handleBlur, handleChange, touched, errors, handleSubmit } = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: basicSchema,
        onSubmit,
    });


    return (
        <div className='FormContainer'>
            <h1>Login Form</h1>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                // onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"

            >
                <Form.Item
                    label="Email"
                    name="email"
                >
                    <Input type="email" id="email" name="email" onChange={handleChange} value={values.email} onBlur={handleBlur} />
                    {errors.email && touched.email ? (
                        <p className="error">{errors.email}</p>
                    ) : (
                        ""
                    )}
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                >
                    <Input.Password type="password" id="password" name="password" onChange={handleChange} value={values.password} onBlur={handleBlur} />
                    {errors.password && touched.password ? (
                        <p className="error">{errors.password}</p>
                    ) : (
                        ""
                    )}
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit" onClick={handleSubmit} >
                        Log In
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
};
export default LoginPage;