import React from 'react'
import Heading from "../../components/Heading"
import Momtitle from "../../../public/Img/MoMtitle.png"
import Panel from './Panel/Panel';
import * as styles from "./Panel/panel.module.scss"

export default function index() {
    return (
        <div>
            <Heading ImgSrc={Momtitle} />
            <Panel />
        </div>
    )
}
