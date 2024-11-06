import React from "react";
import Tombol from './atoms/tombol';
import Logo from './Logo';
import Navlink from "./Navlink";


export default function Footer() {
    return (
        <footer>
            <div className="row py-5 px-3 ">
                <div className="col-12 bg-light">
                    <div className="row">
                        <div className="col-6">
                            <h3 className="page-title">Konsultasi Lebih Lanjut</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, architecto!</p>
                        </div>
                        <div className="col-6 text-end">
                            <Tombol className="btn btn-primary">Kontak Kami</Tombol>
                        </div>
                    </div>
                </div>

                <div className="col-12 bg-secondary">
                    <div className="d-flex justify-content-between py-3 px-3 ">
                        <Logo href="" src="data:image/png;base64,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" width="80px" />
                        <div className="">
                            <ul className="d-flex gap-5 text-light">
                                <Navlink color={"text-white"}>Beranda</Navlink>
                                <Navlink color={"text-white"}>Produk</Navlink>
                                <Navlink color={"text-white"}>Tentang</Navlink>
                            </ul>
                        </div>
                        <div className="d-flex gap-3">
                            <i className="text-light fa-brands fa-youtube"></i>
                            <i className="text-light fa-brands fa-facebook"></i>
                            <i className="text-light fa-brands fa-twiter"></i>
                            <i className="text-light fa-brands fa-instagram"></i>
                            <i className="text-light fa-brands fa-linkedin"></i>
                        </div>
                    </div>
                    <div className="text-center py-4 text-light">
                        Website Bisnis @ 2024 All right reversed
                    </div>
                </div>
            </div>


        </footer>
    );
}