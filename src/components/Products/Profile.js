import React, { useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Item1 from "../../assets/item1.jpg";
import Item2 from "../../assets/item2.jpg";
import Item3 from "../../assets/item3.jpg";
import Item4 from "../../assets/item4.jpg";
import "./Profile.css";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";


const addProdInitialData = {
  title: '',
  price: '',
  type: '',
  file: ''
}
export default function Profile(props) {


  const [editModalInput, setEditModalInput] = useState({
    price: '',
    title: ''
  });

  const [itemId, setItemId] = useState()
  const [addProdData, setAddProdData] = useState(addProdInitialData)
  const items = [
    {
      id: 1,
      img: Item1,
      price: 20.9,
      title: "Purple Background",
      liked: "",
      added: "",
      rating: 4,
      type: "background",
    },
    {
      id: 2,
      img: Item2,
      price: 10.1,
      title: "Texture & Pattern",
      liked: "",
      added: "added",
      rating: 3,
      type: "background",
    },
    {
      id: 3,
      img: Item3,
      price: 20.01,
      title: "Sunset Background",
      liked: "",
      added: "",
      rating: 5,
      type: "background",
    },
    {
      id: 4,
      img: Item4,
      price: 17.02,
      title: "Vintage Car",
      liked: "liked",
      added: "",
      rating: 4,
      type: "background",
    },
  ];

  const editModalOnChange = (e) => {
    e.preventDefault();
    setEditModalInput({
      ...editModalInput,
      [e.target.name]: e.target.value
    })
    console.log(editModalInput)
  }


  const addProductOnChangeHandle = (e) => {
    e.preventDefault();
    setAddProdData({
      ...addProdData,
      [e.target.name]: e.target.value
    })

  }

  const addProdOnSubmitHandle = (e) => {
    e.preventDefault();
    console.log("add Product details", addProdData);
    //call add function
    setAddProdData(addProdInitialData)
  }
  return (
    <div className="signin">
      {/* EDIT PRODUCT MODAL*/}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h4>Edit Product</h4>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body px-4">
              <Form className="form">
                <Row>
                  <FormGroup>
                    <Label for="title" lg={3}>
                      Product Title
                    </Label>
                    <Col lg={9}>
                      <Input
                        type="text"
                        name="title"
                        placeholder="Enter Product Title"
                        onChange={e => editModalOnChange(e)}
                        defaultValue={editModalInput.title}
                        required
                      ></Input>
                    </Col>
                    {/* <div className="valid-feedback">valid.</div>
                    <div className="invalid-feedback">Please enter user id</div> */}
                  </FormGroup>
                </Row>

                <Row>
                  <FormGroup>
                    <Label for="price" lg={3}>
                      Product Price
                    </Label>
                    <Col lg="9">
                      <Input
                        type="number"
                        name="price"
                        id="product-type"
                        placeholder="Enter your Product Price"
                        defaultValue={editModalInput.price}
                        onChange={e => editModalOnChange(e)}
                        required
                      />
                    </Col>
                  </FormGroup>
                  <div className="valid-feedback">valid.</div>
                  <div className="invalid-feedback">
                    Please enter Product Price
                  </div>
                </Row>
                <Row>
                  <FormGroup>
                    <Label for="product-type" lg={3}>
                      Product Type
                    </Label>
                    <Col lg={9}>
                      <Input type="select" name="select" id="product-type" required>
                        <option selected>Choose a category</option>
                        <option value="background" selected>Background</option>
                        <option value="template">Template</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <div className="valid-feedback">valid.</div>
                  <div className="invalid-feedback">
                    Please Choose Product Type
                  </div>
                </Row>
                <Row>
                  <Col lg={12}>
                    <FormGroup>
                      <Input
                        class="form-control form-control-lg"
                        id="formFileLg"
                        type="file"
                      />
                    </FormGroup>
                    <div className="valid-feedback">valid.</div>
                    <div className="invalid-feedback">
                      Please Choose Product Type
                    </div>
                  </Col>
                </Row>
                <Row >
                  <Col lg={12} className="d-flex justify-content-end align-items-center">
                    <button type="button" class="btn btn-secondary mx-2" data-bs-dismiss="modal">Close</button>
                    <button className="btn btn-primary" type="submit">
                      Update
                    </button>
                  </Col>
                </Row>
              </Form>
            </div>

          </div>
        </div>
      </div>


      {/** DELETE PRODUCT MODAL */}
      <div class="modal" id="deleteModal">
        <div class="modal-dialog modal-md modal-dialog-centered">
          <div class="modal-content deleteModal">

            <div class="modal-body">
              <h6>Are you sure?</h6>
              <p>If you delete this product, you can't recover it.</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn" data-bs-dismiss="modal">Cancel</button>
              <button type="button" class="btn deleteBtn" onClick={() =>
                // props.productOp.deleteItem(itemId)
                console.log("item id", itemId)
              }>Delete</button>
            </div>
          </div>
        </div>
      </div>



      <Header sellerInfo={props.sellerInfo} />


      <div className="container text-center profile">
        <div class="d-flex align-items-start">
          <div
            class="nav flex-column nav-pills me-3"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <button
              class="nav-link active "
              id="v-pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-profile"
              type="button"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
            >
              Profile
            </button>
            <button
              class="nav-link"
              id="v-pills-products-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-products"
              type="button"
              role="tab"
              aria-controls="v-pills-products"
              aria-selected="false"
            >
              Products
            </button>
            <button
              class="nav-link"
              id="v-pills-settings-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-settings"
              type="button"
              role="tab"
              aria-controls="v-pills-settings"
              aria-selected="false"
            >
              Add Product
            </button>
          </div>
          <div class="tab-content w-100 p-3" id="v-pills-tabContent">
            <div
              class="tab-pane fade show active ml-3"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
            >
              <ul className="profile-wallet">
                <li className="profile-wallet--list">
                  Wallet address : <span>{props.account ? props.account : "0x"}</span>
                </li>
                <li className="profile-wallet--list">
                  Wallet balance : <span>{props.balance ? props.balance.toFixed(2) : "0.0"}</span>&nbsp;ETH
                </li>
                <li className="profile-wallet--list">
                  Product owned : <span>1</span>
                </li>
              </ul>
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-products"
              role="tabpanel"
              aria-labelledby="v-pills-products-tab"
            >
              <ul>
                {items.map((data) => {
                  return (
                    <li>
                      <div className="profileImgCon">
                        <img src={data.img} alt="" />
                      </div>
                      <div className="productDetail">
                        {data.title}
                        <span>{data.price}&nbsp;ETH</span>
                      </div>

                      <div>
                        <button
                          type="button"
                          className="btn text-white edit-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          onClick={() =>

                            setEditModalInput(data)

                          }

                        >
                          <i class="far fa-edit mx-3"></i>
                        </button>
                        <button type="button" className="btn btn-danger" data-bs-toggle="modal"
                          data-bs-target="#deleteModal" onClick={() => setItemId(data.pid)}>
                          Delete&nbsp;<i class="fas fa-delete"></i>
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-settings"
              role="tabpanel"
              aria-labelledby="v-pills-settings-tab"
            >
              <Col lg={12} className="form-main">
                <Form className="form">
                  <Row>
                    <FormGroup>
                      <Label for="exampleSelect" lg={3}>
                        Product Title
                      </Label>
                      <Col lg={9}>
                        <Input
                          type="text"
                          name="title"
                          placeholder="Enter Product Title"
                          value={addProdData.title}
                          onChange={addProductOnChangeHandle}
                        ></Input>
                      </Col>
                      {/* <div className="valid-feedback">valid.</div>
                    <div className="invalid-feedback">Please enter user id</div> */}
                    </FormGroup>
                  </Row>

                  <Row>
                    <FormGroup>
                      <Label for="identity" lg={3}>
                        Product Price
                      </Label>
                      <Col lg={9}>
                        <Input
                          type="number"
                          name="price"
                          id="product-type"
                          placeholder="Enter your Product Price"
                          value={addProdData.price}
                          onChange={addProductOnChangeHandle}
                          required
                        />
                      </Col>
                    </FormGroup>
                    <div className="valid-feedback">valid.</div>
                    <div className="invalid-feedback">
                      Please enter Product Price
                    </div>
                  </Row>
                  <Row>
                    <FormGroup>
                      <Label for="product-type" lg={3}>
                        Product Type
                      </Label>
                      <Col lg={9}>
                        <Input type="select" name="type" id="product-type" value={addProdData.type} onChange={addProductOnChangeHandle}>
                          <option selected>Select your category</option>
                          <option value="background">Background</option>
                          <option value="template">Template</option>
                        </Input>
                      </Col>
                    </FormGroup>
                    <div className="valid-feedback">valid.</div>
                    <div className="invalid-feedback">
                      Please Choose Product Type
                    </div>
                  </Row>
                  <Row>
                    <Col lg={12}>
                      <FormGroup>
                        <Input
                          class="form-control form-control-lg"
                          id="formFileLg"
                          type="file"
                          name="file"
                          value={addProdData.file}
                          onChange={addProductOnChangeHandle}
                        />
                      </FormGroup>
                      <div className="valid-feedback">valid.</div>
                      <div className="invalid-feedback">
                        Please Choose Product Type
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>

                      <button type="submit" className="btn browsing" onClick={addProdOnSubmitHandle}>

                        Add Product

                      </button>
                    </Col>
                  </Row>
                </Form>


              </Col>
            </div>
          </div>
        </div>
      </div>


      <Footer />
    </div>
  );
}
