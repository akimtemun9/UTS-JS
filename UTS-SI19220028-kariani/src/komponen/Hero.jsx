import React from "react";
import Tombol from './atoms/tombol';

export default function Hero({ title, desc, src }) {
    return (
        <div className="row py-5 px-4 bg-light">
            <div className="col-6">
                <h2 className="mb-5">{title}</h2>
                <p>{desc}</p>
                <div className="mt-5 py-3">
                    <Tombol className="btn btn-primary me-2">Produk Kami</Tombol>
                    <Tombol className="btn btn-outline-primary">Pesan Sekarang</Tombol>
                </div>
            </div>
            <div className="col-6">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://i0.wp.com/informatika.uin-malang.ac.id/hmps/wp-content/uploads/2022/10/image-9.png?fit=1120%2C630&ssl=1" className="img-thumbnail d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg" className="img-thumbnail d-block w-100" alt=".../" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://dicoding-assets.sgp1.cdn.digitaloceanspaces.com/blog/wp-content/uploads/2020/04/internship-rendi-photo-backend.png" className="img-thumbnail d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
}