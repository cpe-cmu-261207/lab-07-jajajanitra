import {useEffect} from 'react';
import axios from 'axios'
import Link from "next/link";
const baseURL = 'https://dummyapi.io/data/api'
const password = '6015521ee7dfad6b195ef4d4'
const Home = () => {
  return (
    //   <h1>This is home page</h1>
      <div id="index">
        <table style={{width:"100%;",backgroundColor:"#ff9f80",borderStyle:"double",borderWidth: "10px",borderColor:"#fcf7e9"}}>
        <tr>
            <td> <Link href={"/home"}><p style={{textAlign:"center"}}> Home </p></Link> </td>
            <td> <Link href={"/gallery"}><p style={{textAlign:"center"}}> Gallery </p></Link> </td>
            <td> <Link href={"/calgpa"}><p style={{textAlign:"center"}}> GPA Calculator </p></Link> </td>
            <td> <Link href={"/contact"}><p style={{textAlign:"center"}}> Contact </p></Link> </td>
            <td> <Link href={"/post"}><p style={{textAlign:"center"}}> Post </p></Link> </td>
        </tr> 
        </table>

        <table align="center">
        <tr style={{textAlign: "center"}}>
            <td><h2>Janitra Chaikird</h2>
                <h4>Computer Engineering Student</h4>
                <h3>janitra_chai@cmu.ac.th</h3></td>
            <td><img src="jj.jpg" alt="myself" style={{width:"250px",height:"250px",alignItems: "baseline"}}></img></td>
        </tr>
        </table>
        <h2>Homepage</h2>
        <table style={{width:"100%",borderCollapse: "collapse",borderStyle: "double",borderWidth: "10px",borderColor:"#ff9f80",backgroundColor:"#fcf7e9"}} id="tableH">
            <tr style={{height:"50px",borderStyle: "solid",borderWidth: "2px",borderColor:"#ff9f80"}}>
                <th style={{borderStyle: "solid",borderWidth: "2px",borderColor:"#ff9f80"}}>Name</th>
                <td>Janitra Chaikird</td>
            </tr>
            <tr style={{height:"50px"}}>
                <th style={{borderStyle: "solid",borderWidth: "2px",borderColor:"#ff9f80"}}>Age</th>
                <td>20 years old</td>
            </tr>
            <tr style={{height:"70px",borderStyle: "solid",borderWidth: "2px",borderColor:"#ff9f80"}}>
                <th style={{borderStyle: "solid",borderWidth: "2px",borderColor:"#ff9f80"}}>Hobbies</th>
                <td>- Watching moives<br></br>- Reading<br></br>- Listen to music</td>
            </tr>
            <tr style={{height:"50px"}}>
                <th style={{borderStyle: "solid",borderWidth: "2px",borderColor:"#ff9f80"}}>Facebook</th>
                <td>Janitra Chaikird</td>
            </tr>
            <tr style={{height:"60px",borderStyle: "solid",borderWidth: "2px",borderColor:"#ff9f80"}}>
                <th style={{borderStyle: "solid",borderWidth: "2px",borderColor:"#ff9f80"}}>E-mail</th>
                <td>- Gmail : jajajanitra@gmail.com<br></br>- Campus : janitra_chai@cmu.ac.th</td>
            </tr>
            <tr style={{height:"50px"}}>
                <th style={{borderStyle: "solid",borderWidth: "2px",borderColor:"#ff9f80"}}>Phone</th>
                <td>081-9604465</td>
            </tr>
        </table>
    </div>
  )
}

export default Home
