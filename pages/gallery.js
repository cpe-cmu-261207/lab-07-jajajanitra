import Link from "next/link";
const Gallery=()=>{
    return(
        <div id="contact">
            <table style={{width:"100%",textAlign: "center",backgroundColor:"#ff9f80",borderStyle:"double",borderWidth: "10px",borderColor:"#fcf7e9"}}>
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

            <h2>Gallery</h2>
            <table style={{width:"100%",borderCollapse: "collapse",borderStyle: "double",borderWidth: "10px",borderColor:"#ff9f80",backgroundColor:"#fcf7e9"}} >
                <tr>
                    <td><img src="dogs1.jpg"></img></td>
                    <td><img src="dogs.jpg"></img></td>
                    <td><img src="dogs2.jpg"></img></td>
                </tr>
                <tr>
                    <td>Pembroke Welsh Corgi</td>
                    <td>Pomeranian</td>
                    <td>French Bulldog</td>
                </tr>
                <tr>
                    <td><img src="sea.jpg"></img></td>
                    <td><img src="plant.jpg"></img></td>
                    <td><img src="tulip.jpg"></img></td>
                </tr>
                <tr>
                    <td>Blue sea</td>
                    <td>Miniature garden</td>
                    <td>Orange tulip</td>
                </tr>
                <tr>
                    <td><img src="cats3.jpg"></img></td>
                    <td><img src="cats1.jpg"></img></td>
                    <td><img src="cats2.jpg"></img></td>
                </tr>
                <tr>
                    <td>Persian</td>
                    <td>Exotic Shorthair</td>
                    <td>Persian</td>
                </tr>
            </table>
        </div>
    )
}
export default Gallery;