import myAlert from '~/myAlert'


function Button({children}){
    return <button onClick={myAlert}>{children}</button>
}


export default Button