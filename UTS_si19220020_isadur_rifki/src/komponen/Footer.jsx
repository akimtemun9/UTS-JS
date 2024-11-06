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
                        <Logo href="" src="data:image/jpeg;base64,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" width="80px" />
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