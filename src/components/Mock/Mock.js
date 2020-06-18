import React, { useState, useEffect } from 'react';
import './style.scss';
export const Mock = (props) => {
	const [status, setStatus] = useState('Processing');
	const [delay] = useState(parseInt(localStorage.getItem('DELAY') || 10));
	useEffect(() => {
		const timer = setTimeout(() => {
			setStatus('Complete')
		}, delay * 1000);
		return () => clearTimeout(timer);
	}, [delay]);
	useEffect(() => {
		let inc = 0;
		let timer;
		timer = setInterval(() => {
			if (inc < 98) {
				setStatus(`Processing(${inc++})`)
			} else {
				clearTimeout(timer);
			}
		}, delay*10);
		return () => clearTimeout(timer);
	}, [delay]);

	return (
		<div>
			<h1>
				{`Current delay is ${delay} seconds`}
			</h1>
<h2>
	Set custom delay in localstorage<pre>localStorage.setItem('DELAY',50)</pre>
</h2>
			<table className="order-hist-submitted paleBlueRows">
				<tr>
					<th width="20"><strong>&nbsp;</strong></th>
					<th width="13%"><strong>Creation Date</strong></th>
					<th width="16%"><strong>Report Type</strong></th>
					<th width="16%"><strong>Date Range</strong></th>
					<th width="*"><strong>Report Name</strong></th>
					<th width="14%"><strong>Status</strong></th>
					<th width="11%"><strong>Actions</strong></th>
				</tr>
				<tr className="">
					<td className="tiny">
						<div id="report-close-div-A3KUK3EBU11MEZ" className="close-button">
						<span>X</span>
						</div>
					</td>

					<td className="tiny">06/18/20</td>
					<td className="tiny">Items</td>
					<td className="tiny">
						12/31/15 -
						06/18/20
        </td>
					<td className="tiny">Gist Report - 1592471315205
        </td>
					<td className="tiny" id="status-cell-A3KUK3EBU11MEZ">
						{status}
					</td>
					<td className="tiny" id="download-cell-A3KUK3EBU11MEZ">
						{status==='Complete' && <a href="/rep.csv">Download</a>}
					</td>
				</tr>
				<tr className="">
					<td className="tiny">
						<div id="report-close-div-A3KUK3EBU11MEZ" className="close-button">
						<span>X</span>
						</div>
					</td>

					<td className="tiny">06/18/20</td>
					<td className="tiny">Items</td>
					<td className="tiny">
						12/31/15 -
						06/18/20
        </td>
					<td className="tiny">Gist Report - 1592471315205
        </td>
					<td className="tiny" id="status-cell-A3KUK3EBU11MEZ">
						Complete
					</td>
					<td className="tiny" id="download-cell-A3KUK3EBU11MEZ">
						 <a href="/rep.csv">Download</a>
					</td>
				</tr>
				<tr className="">
					<td className="tiny">
						<div id="report-close-div-A3KUK3EBU11MEZ" className="close-button">
								<span>X</span>
						</div>
					</td>

					<td className="tiny">06/18/20</td>
					<td className="tiny">Items</td>
					<td className="tiny">
						12/31/15 -
						06/18/20
        </td>
					<td className="tiny">Gist Report - 1592471315205
        </td>
					<td className="tiny" id="status-cell-A3KUK3EBU11MEZ">
						Complete
					</td>
					<td className="tiny" id="download-cell-A3KUK3EBU11MEZ">
						<a href="/rep.csv">Download</a>
					</td>
				</tr>
			</table>
		</div>
	)
}

