import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./china.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Zhiqi Trading (Shanghai) Co., Ltd</div>
							<div className="work-subtitle">
								Sales Manager (Based in Shanghai)
							</div>
							<div className="work-duration">2017 - 2022</div>
						</div>

						<div className="work">
							<img
								src="./editsuits.png"
								alt="edit suits"
								className="work-image"
							/>
							<div className="work-title">Edit Suits Co.</div>
							<div className="work-subtitle">
								Operations Manager
							</div>
							<div className="work-duration">2016 - 2017</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
