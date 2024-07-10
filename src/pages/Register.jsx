import '../App.css';

export default function Register(){
    return(
        <div className="form-container">
            <h1>Registro</h1>
            <form>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" />
                </div>
                <button type="submit">Registrarse</button>
            </form>
        </div>
    )
}