import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { addUser, fetchAllUser } from "../redux/action";
import styles from "../styles/Home.module.css";
import { wrapper } from "../redux/store";
import { useEffect, useState } from "react";

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    const dispatch = store.dispatch;
    await dispatch(await fetchAllUser());
  }
);
 
const Home = () => {
  useEffect(()=>{
    dispatch(fetchAllUser())
     console.log(Users,'hey');
  },[])
  const dispatch = useDispatch();
  const Users = useSelector((state) => state.userReducer.users);

  const [name,setName] = useState("")



  return (
    <div className={styles.container}>
      <Head>
        <title>Next redux crud</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {Users.map((data) => (
          <>
          <p className='para' key={data.id}>{data.title}</p>
          <img src={data.image}/>
          </>
        ))}
        
      </main>

      <footer className={styles.footer}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Simple Next-redux crud
        </a>
      </footer>
    </div>
  );
};

export default Home;