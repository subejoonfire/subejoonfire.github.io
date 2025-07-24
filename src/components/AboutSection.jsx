import React from 'react';

const AboutSection = () => {
  return (
    <div className="aboutme-container">
      <div className="aboutme-header-container">
        <span className="About">About</span>
        <span className="Me">Me</span>
      </div>
      
      <div className="aboutme-content-container">
        <div className="aboutme-kelahiran">
          <p>
            Saya adalah mahasiswa <b>Politeknik Negeri Tanah Laut</b>, 
            program studi <b>D3 Teknologi Informasi</b> sejak tahun 2022.
          </p>
          <p>
            Saya memiliki pengalaman sebagai <b>Web Developer</b>. 
            Saya berpengalaman menggunakan <b>Framework Laravel, Code Igniter 3/4, dan React JS</b>. 
            Saya merupakan pribadi yang bertanggung jawab, mudah beradaptasi, cepat belajar, 
            mampu bekerja sama dengan baik dalam tim maupun individu.
          </p>
        </div>
        
        <div className="aboutme-side-container">
          <div className="aboutme-side-content-container">
            <table>
              <tbody>
                <tr>
                  <td className="span-header">Umur</td>
                  <td>19</td>
                </tr>
                <tr>
                  <td className="span-header">Negara</td>
                  <td>Indonesia</td>
                </tr>
                <tr>
                  <td className="span-header">Kota</td>
                  <td>Pelaihari</td>
                </tr>
                <tr>
                  <td className="span-header">Email</td>
                  <td>Harlanmuradi@gmail.com</td>
                </tr>
                <tr>
                  <td className="span-header">Nomor</td>
                  <td>+6285751616536</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <div className="aboutme-whatido-container">
        <div className="aboutme-whatido-header-container">
          <h1 className="What">What</h1>
          <h1 className="Ido">I Do</h1>
        </div>
        
        <div className="aboutme-whatido-body-container">
          <div className="computer-development">
            <div className="computer-development-header">
              <span className="material-symbols-outlined">devices</span>
              <h1>Computer Development</h1>
            </div>
            <div className="computer-development-body">
              <p>Saya berhasil membuat berbagai macam Sistem Informasi seperti Pencatatan Barang dan Pengrosiran Barang.</p>
            </div>
          </div>
          
          <div className="freelancer">
            <div className="freelancer-header">
              <span className="material-symbols-outlined">linked_services</span>
              <h1>Freelancer</h1>
            </div>
            <div className="freelancer-body">
              <p>Saya menerima jasa membuat website, seperti Profile, Sistem Informasi, dan hal yang sebagainya.</p>
            </div>
          </div>
          
          <div className="freelancer">
            <div className="freelancer-header">
              <span className="material-symbols-outlined">storefront</span>
              <h1>Marketing</h1>
            </div>
            <div className="freelancer-body">
              <p>Saya menjalankan suatu bisnis dalam menjual suatu barang, baik menjual langsung ke konsumen, maupun ke distributor.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;