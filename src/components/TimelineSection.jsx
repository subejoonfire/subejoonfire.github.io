import React from 'react';

const TimelineSection = () => {
  return (
    <>
      <div className="education-container">
        <div className="education-header-container">
          <h1>Education</h1>
        </div>
        <div className="education-body-container">
          <div className="timeline-item">
            <div className="left-part">
              <span className="header">2022 - Sekarang</span>
            </div>
            <div className="divider"></div>
            <div className="right-part">
              <span className="header">Politeknik Negeri Tanah Laut</span>
              <span className="description">Program Studi D3 Teknologi Informasi</span>
            </div>
          </div>
          <div className="timeline-item">
            <div className="left-part">
              <span className="header">2019 - 2022</span>
            </div>
            <div className="divider"></div>
            <div className="right-part">
              <span className="header">SMKN 1 Pelaihari</span>
              <span className="description">Jurusan Bisnis Daring dan Pemasaran</span>
            </div>
          </div>
          <div className="timeline-item">
            <div className="left-part">
              <span className="header">2017 - 2019</span>
            </div>
            <div className="divider"></div>
            <div className="right-part">
              <span className="header">SMPN 3 Pelaihari</span>
              <span className="description">Pelaihari</span>
            </div>
          </div>
          <div className="timeline-item">
            <div className="left-part">
              <span className="header">2016 - 2017</span>
            </div>
            <div className="divider"></div>
            <div className="right-part">
              <span className="header">SMPN 192 Jakarta Timur</span>
              <span className="description">Jakarta Timur</span>
            </div>
          </div>
          <div className="timeline-item last-item">
            <div className="left-part">
              <span className="header">2009 - 2015</span>
            </div>
            <div className="divider"></div>
            <div className="right-part">
              <span className="header">SDI As-syafi'iyah 03</span>
              <span className="description">Jakarta Timur</span>
            </div>
          </div>
        </div>
      </div>

      <div className="experience-container">
        <div className="experience-header-container">
          <h1>Experience</h1>
        </div>
        <div className="experience-body-container">
          <div className="timeline-item">
            <div className="left-part">
              <span className="header">2023 - Sekarang</span>
            </div>
            <div className="divider"></div>
            <div className="right-part">
              <span className="header">Sistem Informasi Pengrosiran Barang</span>
              <span className="description">Membuat sebuah e-commerce untuk wilayah pelaihari</span>
            </div>
          </div>
          <div className="timeline-item last-item">
            <div className="left-part">
              <span className="header">2022 - 2023</span>
            </div>
            <div className="divider"></div>
            <div className="right-part">
              <span className="header">Sistem Informasi Pencatatan Stok</span>
              <span className="description">Membuat sebuah website untuk melakukan pencatatan barang disebuah rumah makan</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimelineSection;