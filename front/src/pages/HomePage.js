import {Helmet} from `react-helmet`;
import Button from `../components/Button`;
import Container from `../components/Container`;
import Lined from `../components/Lined`;
import styles from `../HomePage.module.css`;
import landingImg from `../assets/landing.svg`;

function HomePage(){
  return (
    <>
      <Helmet>
        <Title> 초기 </Title>
      </Helmet>
      <div className={styles.bg}>
        <Container className={styles.texts}>
          <h1 className={styles.heading}>
            <Lined>코딩이 처음이라면</Lined>
            <br/>
            <strong>코드댓</strong>
          </h1>
          <p className={styles.descripion}>
            11만명 
            <br/>
            함께
          </p>
          <div>
            <Button>지금시작하기</Button>
          </div>
          <div className={styles.figure}>
            <img src={landingImg} alt="그래프, 모니터, 윈도우, 자물쇠, 키보드" />
          </div>
        </Container>
      </div>
    </>
  );
}

export default HomePage;