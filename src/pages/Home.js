import "../App.scss"
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import { useEffect, useState } from "react";
import Logout from "../components/Logout";
function Home() {
  const [avatar, setAvatar] = useState();
  const [userName, setUserName] = useState();
  const [repoList, setRepoList] = useState();
  const [searchTerm, setSearchTerm] = useState("");

  // function async lấy data của repo trong github
  async function repoListData() {
    await fetch("https://api.github.com/users/duc11102000/repos")
      .then((res) => res.json())
      .then(
        (data) => {
          console.log(data);
          setRepoList(data);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  //lấy data từ github api để display ảnh và tên profile
  useEffect(() => {
    fetch("https://api.github.com/users/duc11102000")
      .then((res) => res.json())
      .then(
        (data) => {
          console.log(data);
          setAvatar(data.avatar_url);
          setUserName(data.login);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);
  return (
    <div className="App w-100 min-vh-100 d-flex justify-content-center align-items-center flex-column">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={avatar} />
        <Card.Body>
          <Card.Title>{userName}'s repos</Card.Title>
          <Card.Text>Repositories list.</Card.Text>
          <Accordion onClick={repoListData}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Show</Accordion.Header>
              <Accordion.Body className="p-0">
                <div>
                  <div className="search-input">
                    <input
                      type="text"
                      placeholder="Search here"
                      onChange={(event) => {
                        setSearchTerm(event.target.value);
                      }}
                    />
                  </div>
                  <div>
                    {repoList &&
                      repoList
                        .filter((val) => {
                          if (searchTerm === "") {
                            return val;
                          } else if (
                            val.name
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase())
                          ) {
                            return val;
                          }
                        })
                        .map((val) => {
                          return (
                            <div key={val.id} className="repo-container">
                              <a target="_blank" href={val.svn_url} className="repo-items">{val.name}</a>
                            </div>
                          );
                        })}
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card.Body>
      </Card>
      {/* <Logout/> */}
    </div>
  );
}

export default Home;
