import { useLocation } from "wouter";
import { useEffect, useState } from "react";
export default function Login() {
	const [formData, setFormData] = useState({});
	const [validLogin, setValidLogin] = useState(undefined);
	const [location, setLocation] = useLocation();

	const handleForm = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	useEffect(() => {
		if (validLogin) {
			setLocation("/poker");
		}
	});

	function validar(e) {
		e.preventDefault();
		const usuario = formData.nombre;
		const password = formData.password;
		if (usuario === "admin" && password === "1234") {
			localStorage.setItem("usuario", usuario);
			localStorage.setItem("clave", password);
			setValidLogin(true);
		} else {
			setValidLogin(false);
		}
	}
	return (
		<main className="flex items-center justify-center">
			<form onSubmit={validar} className="w-1/2 ml-0 md:ml-8 mt-8">
				<h1 className="text-3xl">Iniciar sesión</h1>
				<div className="w-full pt-2">
					<p className="block pb-2">Usuario</p>
					<input
						name="nombre"
						className="border border-black p-1 w-full"
						onChange={handleForm}
						placeholder="Nombre"
						type="text"
					/>
				</div>
				<div className="w-full pt-2">
					<p className="block pb-2">Clave</p>
					<input
						name="password"
						placeholder="Contraseña"
						onChange={handleForm}
						className="border border-black p-1 w-full"
						type="password"
					/>
				</div>
				<input
					className="bg-red-500 w-20 text-center text-white mt-2"
					type="submit"
				/>
			</form>
		</main>
	);
}
