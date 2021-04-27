import { useEffect, useState } from "react";
export default function Index({ externalValues }) {
	const [values, setValues] = useState([]);

	useEffect(() => {
		async function call() {
			const url =
				"https://raw.githubusercontent.com/SantiagoCaballeroLeon/cartasjson/main/cartas";
			const data = await fetch(url).then((response) => response.json());
			setValues(data.data);
		}
		call();
	}, []);

	return (
		<table className="border border-black w-full ml-0 md:ml-8 mt-4 md:mt-0">
			<thead className="border border-black bg-red-300 text-center">
				<tr>
					<th className="border border-black p-2">#</th>
					<th className="border border-black p-2">Carta</th>
				</tr>
			</thead>
			<tbody className="border border-black text-center">
				{values.map((obj, index) => (
					<tr index={index}>
						<th className="border border-black p-2">{obj.numero}</th>
						<th className="border border-black p-2">{obj.carta}</th>
					</tr>
				))}
				{externalValues.map((obj, index) => (
					<tr index={index}>
						<th className="border border-black p-2">{obj.numero}</th>
						<th className="border border-black p-2">{obj.carta}</th>
					</tr>
				))}
			</tbody>
		</table>
	);
}
