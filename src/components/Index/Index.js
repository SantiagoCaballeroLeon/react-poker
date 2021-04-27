import Carta from "../Carta/Carta";
import Table from "../Table/Table";
import Register from "../Register/Register";
import { useState } from "react";

export default function Index() {
	const [externalValues, setExternalValues] = useState([]);

	return (
		<div className="w-4/5 mx-auto py-4">
			<img alt="logo" src="/image/logo.png" width="200px" />
			<div className="w-full pt-8 md:flex">
				<div id="galeria" class="grid gap-8 grid-cols-4 w-full md:w-2/3">
					<Carta />
				</div>
				<div className="w-full md:w-1/3">
					<Table externalValues={externalValues} />
					<Register
						externalValues={externalValues}
						setExternalValues={setExternalValues}
					/>
				</div>
			</div>
		</div>
	);
}
