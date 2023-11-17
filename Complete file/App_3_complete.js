import './App.css';

function withStyles(Component){
    return(props) => {
        const style = {
            color: "red",
            fontSize: "1cm",
            ...props.styles,
        };
        return <Component{...props} style={style} />;
    }
}
const Text = ({style = {} }) => {
    <p styles={{...style, fontFamily:"Inter"}}> MamaMia</p>
};
const StyleText = withStyles(Text);
function Welcome({name}) {
    return(
        <section>
            <h1>Hello, <span>{name}</span>😘</h1>
        </section>
    )
}
function App(){
    return(
        <div className='App'>
            <Welcome name="Me" />
            <Text />
            <StyleText />
        </div>
    )
}

function User(){
    const name="Mim"
    const pic ="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/e4/e4ea91a1ed64ca559c5a3dc17a269de5d7e5fa97_full.jpg"
    return(
        <section>
            <img className='user-profile-pic' src={pic} alt={name} />
            <h2 className='user-name'>
                Hello, <span className='user-first-name'>{name}</span>
            </h2>
        </section>
    )
}

export default User;