import { useState } from "react";

export default function Register({ externalValues, setExternalValues }) {
	const [values, setValues] = useState({});

	const guardar = (e) => {
		e.preventDefault();
		const numero = values.numero;
		const carta = values.carta;
		if (numero !== "" && carta !== "") {
			setExternalValues([...externalValues, values]);
		}
	};
	const handleChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	return (
		<form onSubmit={guardar} className="w-full ml-0 md:ml-8 mt-8">
			<h1 className="text-3xl">Registro de cartas</h1>
			<div className="w-full pt-2">
				<p className="block pb-2">Número</p>
				<input
					name="numero"
					onChange={handleChange}
					className="border border-black p-1 w-full"
					placeholder="Ingrese el número"
					type="text"
				/>
				<p className="text-sm">Debe ingresar un numero del 1 al 13</p>
			</div>
			<div className="w-full pt-2">
				<p className="block pb-2">Carta</p>
				<input
					name="carta"
					onChange={handleChange}
					className="border border-black p-1 w-full"
					placeholder="Descripción"
					type="text"
				/>
			</div>
			<input
				type="submit"
				className="bg-red-500 w-20 text-center text-white mt-2"
			/>
		</form>
	);
}
