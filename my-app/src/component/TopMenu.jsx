import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const TopMenu = () => {

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">오늘뭐먹지?</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="random">랜덤식당고르기</Nav.Link>
                    <Nav.Link href="#link">리뷰보러가기</Nav.Link>
                    <NavDropdown title="마이페이지" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">내가 쓴 리뷰보기</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        개인정보 수정
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">로그아웃</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        OOO님 반갑습니다
                    </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <a href="login">login</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )


}

export default TopMenu;