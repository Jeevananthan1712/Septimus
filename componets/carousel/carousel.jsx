// import react from "React";
import Styles from "./carosel.module.css";
import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { Fragment } from "react";
// import "../../images/alco.jpg"
// import CardGroup from "react-bootstrap/CardGroup";




export default function navbar() {
return (
  <>
    <section className={Styles.section1}>
      <Carousel cols={2} rows={1} gap={10} loop>
        <Carousel.Item>
          <img
            width="100%"
            src="https://d3h2k7ug3o5pb3.cloudfront.net/image/2021-12-06/d2147080-5675-11ec-a0f0-cb339b9be686.png"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="100%"
            src="https://cdn.optinmonster.com/wp-content/uploads/2021/07/customer-testimonial-examples-fb-image.png"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="100%"
            src="https://www.vandelaydesign.com/wp-content/uploads/circle-2.jpg"
          />
        </Carousel.Item>

        {/* ... */}
      </Carousel>
      {/* <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="w-100"
            src="https://images.pexels.com/photos/2796105/pexels-photo-2796105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-50 "
            src="https://i.im.ge/2022/07/18/FuEIwh.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            // className={Styles.backimage}
            className="d-block w-100"
            src="https://i.im.ge/2022/07/18/FuEIwh.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://i.im.ge/2022/07/18/FuEIwh.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://i.im.ge/2022/07/18/FuEIwh.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://i.im.ge/2022/07/18/FuEIwh.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://i.im.ge/2022/07/18/FuEIwh.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>*/}
    </section>

    <section className={Styles.section3}>
      {/*  */}
      {/* <CardGroup> */}
      <Fragment>
        <div data-aos="fade-up" data-aos-anchor-placement="bottom-center">
          <tr>
            <td>
              <Card className={Styles.cardblock}>
                <Card.Img
                  variant="top"
                  src="https://images.pexels.com/photos/5847825/pexels-photo-5847825.jpeg?auto=compress&cs=tinysrgb&w=100"
                />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card className={Styles.cardblock}>
                <Card.Img
                  variant="top"
                  src="https://i.im.ge/2022/07/20/F22JSP.jpg"
                />

                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </td>
            <td>
              <Card className={Styles.cardblock}>
                <Card.Img
                  variant="top"
                  src="https://i.im.ge/2022/07/20/F21yBq.jpg"
                />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>

              <Card className={Styles.cardblock}>
                <Card.Img
                  variant="top"
                  src="https://i.im.ge/2022/07/20/F22JSP.jpg"
                />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.{" "}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </td>
            <td>
              <Card className={Styles.cardblock}>
                <Card.Img
                  variant="top"
                  src="https://i.im.ge/2022/07/20/F21yBq.jpg"
                />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>

              <Card className={Styles.cardblock}>
                <Card.Img
                  variant="top"
                  src="https://i.im.ge/2022/07/20/F22JSP.jpg"
                />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </td>
            <td>
              <Card className={Styles.cardblock}>
                <Card.Img
                  variant="top"
                  src="https://i.im.ge/2022/07/20/F21yBq.jpg"
                />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>

              <Card className={Styles.cardblock}>
                <Card.Img
                  variant="top"
                  src="https://i.im.ge/2022/07/20/F22JSP.jpg"
                />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.{" "}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </td>
          </tr>
        </div>

        {/* </CardGroup> */}
      </Fragment>
    </section>
  </>
);
}

