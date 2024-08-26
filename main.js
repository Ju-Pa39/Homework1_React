
const mainH = {
    backgroundColor: '#F0F8FF',
    width: '100%',
    height: '100vh',
    paddingTop: '50px'
}

const sCard = {
    width: '600px',
    height: '500px',
    backgroundColor: 'white',
    borderRadius: '20px',
    border: '2px solid',
    borderColor: '#eee',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    padding: '30px',
    gap: '20px'
}

const sCardImg = {
    margin: 'auto',
    textAlign: 'center',
    gap: '30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}
const sImg = {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
}
const sCardDetail = {
    display: 'flex',
    gap: '20px',
    margin: 'auto',
    justifyContent: 'center',
    textAlign: 'center',
    gap: '50px'
}
const sDivDetail = {
    width: '100px'
}
const p1 = {
    fontSize: '1.5rem',
    fontWeight: '600'
}
const p2 = {
    fontSize: '1.3rem',
    color: '#aaa',
    fontWeight: '500'
}

const p3 = {
    fontSize: '1.3rem',
    color: '#BEBEBE',
    fontWeight: '500'
}



function App() {

    return (
        <div className="main-ctn" style={mainH}>
            <Card />
        </div>
    )
}

function Card() {

    return (
        <div style={sCard} >
            <Cardimg />
            <Carddetails />
        </div>

    )
}

function Cardimg() {
    return (
        <div style={sCardImg}>
            <img style={sImg} src='./img/girl.avif'/>
            <div>
                <p style={p1}>Julienne Moore</p>
                <p style={p3}>julienne.more@company.com</p>
            </div>
        </div>
    )
}

function Carddetails() {
    return (
        <div style={sCardDetail}>
            <div style={sDivDetail}>
                <p style={p1}>25</p>
                <p style={p2}>Post</p>
            </div>
            <div style={sDivDetail}>
                <p style={p1}>350</p>
                <p style={p2}>Following</p>
            </div>
            <div style={sDivDetail}>
                <p style={p1}>1.5K</p>
                <p style={p2}>follower</p>
            </div>
        </div>
    )
}




ReactDOM.createRoot(document.querySelector('#root'))
    .render(<App />)