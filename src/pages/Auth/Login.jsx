import {
  Link,
  Navbar,
  NavLeft,
  NavRight,
  NavTitle,
  List,
  ListInput,
  Page,
  Toolbar,
  Button,
} from 'framework7-react'
import React, { useState } from 'react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'

const USNSchema = Yup.object().shape({
  USN: Yup.string().required('Nhập tài khoản của bạn.'),
  PWD: Yup.string().required('Nhập nhật khẩu của bạn.'),
})

function Login({ f7router }) {
  const [initialValues] = useState({ USN: '', PWD: '' })

  const onSubmit = () => {
    console.log()
  }

  return (
    <Page className="page-auth" name="login" noNavbar noToolbar>
      <div className="p-safe-area-top">
        <div className="pt-70px text-center">
          <img
            className="w-170px"
            src="https://cser.vn/app/images/logo-app.png"
            alt=""
          />
        </div>
        <div className="text-white text-center mt-40px mb-20px">
          Xin chào, Bắt đầu đăng nhập nào
        </div>
      </div>
      <div className="px-20px">
        <Formik
          initialValues={initialValues}
          validationSchema={USNSchema}
          onSubmit={onSubmit}
          enableReinitialize={true}
        >
          {(formikProps) => {
            const {
              errors,
              touched,
              values,
              handleChange,
              handleBlur,
              setFieldValue,
            } = formikProps
            return (
              <Form className="bg-white py-25px px-20px">
                <div className="text-center text-uppercase fz-18px fw-600 mb-20px">
                  Đăng nhập tài khoản
                </div>
                <List>
                  <ListInput
                    outline
                    label="Tài khoản"
                    floatingLabel
                    type="text"
                    name="USN"
                    placeholder="Nhập tài khoản"
                    value={values.USN}
                    clearButton
                    onInputClear={() => setFieldValue('USN', '', false)}
                    className="auto-focus"
                    errorMessage={errors.USN}
                    validate
                    errorMessageForce={errors.USN && touched.USN}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <ListInput
                    outline
                    label="Mật khẩu"
                    floatingLabel
                    type="password"
                    name="PWD"
                    placeholder="Nhập mật khẩu"
                    clearButton
                    onInputClear={() => setFieldValue('PWD', '', false)}
                    className="mt-20px auto-focus"
                    errorMessage={errors.PWD}
                    value={values.PWD}
                    validate
                    errorMessageForce={errors.PWD && touched.PWD}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </List>
                <div className="mt-20px">
                  <Button type="submit" fill round large raised>
                    Đăng nhập
                  </Button>
                </div>
              </Form>
            )
          }}
        </Formik>
      </div>
    </Page>
  )
}

export default Login
