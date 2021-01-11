import React from "react"
import Alert from "./components/Alert";
import alertarray from "./AlertArray";
import Counter from "./components/Counter";

class Main extends React.Component{
    render(){
        let data = [
            {warna: "danger", teks: "Awas ada Jarwo!"},
            {warna: "info", teks: "Awas ada Adit!"},
            {warna: "success", teks: "Selamat Anda Juara!"},
            {warna: "warning", teks: "Hati-hati!"}
        ]
        let alert = [
            {warna: "secondary", teks: "Awas ada Jarwo!"},
            {warna: "secondary", teks: "Awas ada Adit!"},
            {warna: "secondary", teks: "Selamat Anda Juara!"},
            {warna: "secondary", teks: "Hati-hati!"}
        ]
        return(
            <div className="container">
                <p className="text-danger nama">Nama : Harry</p>
                <p className="text-success">Alamat : Sidoarjo</p>
                <p className="text-info">Umur : 17 tahun</p>
                
                <br></br>
                <Alert color="danger" />
                <Alert color="info" />

                <br></br>
                <Alert color="secondary" teks="Teks Input Terbaru Guys" />

                <br></br>
                {data.map(item => (
                    <Alert color={item.warna} teks={item.teks} />
                ))}

                <br></br>
                <Alert color={alert[2].warna} teks={alert[2].teks} />

                <br></br>
                {alertarray.map(item => (
                    <Alert color={item.warna} teks={item.teks} />
                ))}

                <br></br>
                <Alert color={alertarray[2].warna} teks={alertarray[2].teks} />

                <br></br>
                <Counter />

                <br></br>
                <Counter />
                
                <br></br>
                <br></br>
            </div>
        )
    }
}

export default Main;