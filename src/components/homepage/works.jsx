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
								src="ocbc.svg"
								alt="OCBC"
								className="work-image"
							/>
							<div className="work-title">OCBC Bank</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">-2024 - Present</div>
						</div>

						<div className="work">
							<img
								src="trustedhub.jpg"
								alt="Trusted Hub Ltd"
								className="work-image"
							/>
							<div className="work-title">Trusted Hub Ltd</div>
							<div className="work-subtitle">
								Software Developer
							</div>
							<div className="work-duration">2023 - 2024</div>
						</div>

						<div className="work">
							<img
								src="China.png"
								alt="china"
								className="work-image"
							/>
							<div className="work-title">
								Zhiqi Trading (Shanghai) Co., Ltd
							</div>
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
