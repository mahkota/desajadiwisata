// Foto 360 yang diletakkan di halaman utama
const STOREFRONT_360 = "assets/images/dw/threesixty/contour_360.png"

// Data utama dari website
const MAIN_DATA = JSON.parse(`
{
    "researches": [
        {
            "big_title": "Desa Pandanwangi",
            "big_img": "assets/images/dw/dronecap/DJI_0003.JPG",
            "judul_penelitian": "Rancangan Pengembangan Desa Wisata Budaya Berbasis Citra Teknologi dan Nilai-nilai Ecovillage",
            "peneliti": "Dr. Mupid Hidayat, M.Pd., Dr. Maulia Depriya Kembara, M.Pd., Rama Wijaya A. Rozak, M.Pd.",
            "deskripsi": "-",
            "tanggal_penelitian": "10-10-2020",
            "tempat_penelitian": "Cianjur",
            "coord_map": [-6.854306, 107.065604],
            "coord_marker": [-6.853606, 107.065386],
            "doc": "#",
            "src_360": {
                "file": "assets/images/dw/threesixty/contour_360.png",
                "title": "3D Mapping Lokasi Desa Wisata Pandanwangi"
            },
            "src_3d": [
                {"top_file": "assets/images/dw/3d/1.png", "bottom_file": "assets/images/dw/3d/1a.png"},
                {"top_file": "assets/images/dw/3d/2.png", "bottom_file": "assets/images/dw/3d/2a.png"},
                {"top_file": "assets/images/dw/3d/3.png", "bottom_file": "assets/images/dw/3d/3a.png"},
                {"top_file": "assets/images/dw/3d/4.png", "bottom_file": "assets/images/dw/3d/4a.png"},
                {"top_file": "assets/images/dw/3d/5.png", "bottom_file": "assets/images/dw/3d/5a.png"},
                {"top_file": "assets/images/dw/3d/6.png", "bottom_file": "assets/images/dw/3d/6a.png"},
                {"top_file": "assets/images/dw/3d/7.png", "bottom_file": "assets/images/dw/3d/7a.png"},
                {"top_file": "assets/images/dw/3d/8.png", "bottom_file": "assets/images/dw/3d/8a.png"},
                {"top_file": "assets/images/dw/3d/9.png", "bottom_file": "assets/images/dw/3d/9a.png"}
            ],
            "src_nav": [
                "assets/images/dw/dronecap/DJI_0002.JPG",
                "assets/images/dw/dronecap/DJI_0003.JPG",
                "assets/images/dw/dronecap/DJI_0004.JPG",
                "assets/images/dw/dronecap/DJI_0005.JPG",
                "assets/images/dw/dronecap/DJI_0006.JPG",
                "assets/images/dw/dronecap/DJI_0007.JPG",
                "assets/images/dw/dronecap/DJI_0008.JPG",
                "assets/images/dw/dronecap/DJI_0009.JPG",
                "assets/images/dw/dronecap/DJI_0010.JPG",
                "assets/images/dw/dronecap/DJI_0011.JPG",
                "assets/images/dw/dronecap/DJI_0012.JPG",
                "assets/images/dw/dronecap/DJI_0013.JPG",
                "assets/images/dw/dronecap/DJI_0014.JPG",
                "assets/images/dw/dronecap/DJI_0015.JPG",
                "assets/images/dw/dronecap/DJI_0016.JPG",
                "assets/images/dw/dronecap/DJI_0017.JPG",
                "assets/images/dw/dronecap/DJI_0018.JPG",
                "assets/images/dw/dronecap/DJI_0019.JPG",
                "assets/images/dw/dronecap/DJI_0020.JPG",
                "assets/images/dw/dronecap/DJI_0021.JPG",
                "assets/images/dw/dronecap/DJI_0022.JPG",
                "assets/images/dw/dronecap/DJI_0023.JPG",
                "assets/images/dw/dronecap/DJI_0024.JPG",
                "assets/images/dw/dronecap/DJI_0025.JPG",
                "assets/images/dw/dronecap/DJI_0026.JPG",
                "assets/images/dw/dronecap/DJI_0027.JPG",
                "assets/images/dw/dronecap/DJI_0028.JPG",
                "assets/images/dw/dronecap/DJI_0029.JPG",
                "assets/images/dw/dronecap/DJI_0030.JPG",
                "assets/images/dw/dronecap/DJI_0031.JPG",
                "assets/images/dw/dronecap/DJI_0032.JPG",
                "assets/images/dw/dronecap/DJI_0033.JPG",
                "assets/images/dw/dronecap/DJI_0034.JPG",
                "assets/images/dw/dronecap/DJI_0035.JPG",
                "assets/images/dw/dronecap/DJI_0036.JPG",
                "assets/images/dw/dronecap/DJI_0037.JPG",
                "assets/images/dw/dronecap/DJI_0038.JPG",
                "assets/images/dw/dronecap/DJI_0039.JPG",
                "assets/images/dw/dronecap/DJI_0040.JPG",
                "assets/images/dw/dronecap/DJI_0041.JPG",
                "assets/images/dw/dronecap/DJI_0042.JPG",
                "assets/images/dw/dronecap/DJI_0043.JPG",
                "assets/images/dw/dronecap/DJI_0044.JPG",
                "assets/images/dw/dronecap/DJI_0045.JPG",
                "assets/images/dw/dronecap/DJI_0046.JPG",
                "assets/images/dw/dronecap/DJI_0047.JPG",
                "assets/images/dw/dronecap/DJI_0048.JPG",
                "assets/images/dw/dronecap/DJI_0049.JPG",
                "assets/images/dw/dronecap/DJI_0050.JPG",
                "assets/images/dw/dronecap/DJI_0051.JPG",
                "assets/images/dw/dronecap/DJI_0052.JPG",
                "assets/images/dw/dronecap/DJI_0053.JPG",
                "assets/images/dw/dronecap/DJI_0054.JPG",
                "assets/images/dw/dronecap/DJI_0055.JPG",
                "assets/images/dw/dronecap/DJI_0056.JPG",
                "assets/images/dw/dronecap/DJI_0057.JPG",
                "assets/images/dw/dronecap/DJI_0058.JPG",
                "assets/images/dw/dronecap/DJI_0059.JPG",
                "assets/images/dw/dronecap/DJI_0060.JPG",
                "assets/images/dw/dronecap/DJI_0061.JPG",
                "assets/images/dw/dronecap/DJI_0062.JPG",
                "assets/images/dw/dronecap/DJI_0063.JPG",
                "assets/images/dw/dronecap/DJI_0064.JPG",
                "assets/images/dw/dronecap/DJI_0065.JPG",
                "assets/images/dw/dronecap/DJI_0066.JPG",
                "assets/images/dw/dronecap/DJI_0067.JPG",
                "assets/images/dw/dronecap/DJI_0068.JPG",
                "assets/images/dw/dronecap/DJI_0069.JPG",
                "assets/images/dw/dronecap/DJI_0070.JPG",
                "assets/images/dw/dronecap/DJI_0071.JPG",
                "assets/images/dw/dronecap/DJI_0072.JPG",
                "assets/images/dw/dronecap/DJI_0073.JPG",
                "assets/images/dw/dronecap/DJI_0074.JPG",
                "assets/images/dw/dronecap/DJI_0075.JPG",
                "assets/images/dw/dronecap/DJI_0076.JPG",
                "assets/images/dw/dronecap/DJI_0077.JPG",
                "assets/images/dw/dronecap/DJI_0078.JPG",
                "assets/images/dw/dronecap/DJI_0079.JPG",
                "assets/images/dw/dronecap/DJI_0080.JPG",
                "assets/images/dw/dronecap/DJI_0081.JPG",
                "assets/images/dw/dronecap/DJI_0082.JPG",
                "assets/images/dw/dronecap/DJI_0083.JPG",
                "assets/images/dw/dronecap/DJI_0084.JPG",
                "assets/images/dw/dronecap/DJI_0085.JPG",
                "assets/images/dw/dronecap/DJI_0086.JPG",
                "assets/images/dw/dronecap/DJI_0087.JPG",
                "assets/images/dw/dronecap/DJI_0088.JPG",
                "assets/images/dw/dronecap/DJI_0089.JPG",
                "assets/images/dw/dronecap/DJI_0090.JPG",
                "assets/images/dw/dronecap/DJI_0091.JPG",
                "assets/images/dw/dronecap/DJI_0092.JPG",
                "assets/images/dw/dronecap/DJI_0093.JPG",
                "assets/images/dw/dronecap/DJI_0094.JPG",
                "assets/images/dw/dronecap/DJI_0095.JPG",
                "assets/images/dw/dronecap/DJI_0096.JPG",
                "assets/images/dw/dronecap/DJI_0097.JPG",
                "assets/images/dw/dronecap/DJI_0098.JPG",
                "assets/images/dw/dronecap/DJI_0099.JPG",
                "assets/images/dw/dronecap/DJI_0100.JPG",
                "assets/images/dw/dronecap/DJI_0101.JPG",
                "assets/images/dw/dronecap/DJI_0102.JPG",
                "assets/images/dw/dronecap/DJI_0103.JPG",
                "assets/images/dw/dronecap/DJI_0104.JPG",
                "assets/images/dw/dronecap/DJI_0105.JPG",
                "assets/images/dw/dronecap/DJI_0106.JPG",
                "assets/images/dw/dronecap/DJI_0107.JPG",
                "assets/images/dw/dronecap/DJI_0108.JPG",
                "assets/images/dw/dronecap/DJI_0109.JPG",
                "assets/images/dw/dronecap/DJI_0110.JPG",
                "assets/images/dw/dronecap/DJI_0111.JPG",
                "assets/images/dw/dronecap/DJI_0112.JPG",
                "assets/images/dw/dronecap/DJI_0113.JPG",
                "assets/images/dw/dronecap/DJI_0114.JPG",
                "assets/images/dw/dronecap/DJI_0115.JPG",
                "assets/images/dw/dronecap/DJI_0116.JPG",
                "assets/images/dw/dronecap/DJI_0117.JPG",
                "assets/images/dw/dronecap/DJI_0118.JPG",
                "assets/images/dw/dronecap/DJI_0119.JPG",
                "assets/images/dw/dronecap/DJI_0120.JPG",
                "assets/images/dw/dronecap/DJI_0121.JPG",
                "assets/images/dw/dronecap/DJI_0122.JPG",
                "assets/images/dw/dronecap/DJI_0123.JPG",
                "assets/images/dw/dronecap/DJI_0124.JPG",
                "assets/images/dw/dronecap/DJI_0125.JPG",
                "assets/images/dw/dronecap/DJI_0126.JPG",
                "assets/images/dw/dronecap/DJI_0127.JPG",
                "assets/images/dw/dronecap/DJI_0128.JPG",
                "assets/images/dw/dronecap/DJI_0129 (2).JPG",
                "assets/images/dw/dronecap/DJI_0129.JPG",
                "assets/images/dw/dronecap/DJI_0130 (2).JPG",
                "assets/images/dw/dronecap/DJI_0130.JPG",
                "assets/images/dw/dronecap/DJI_0131 (2).JPG",
                "assets/images/dw/dronecap/DJI_0131.JPG",
                "assets/images/dw/dronecap/DJI_0132 (2).JPG",
                "assets/images/dw/dronecap/DJI_0132.JPG",
                "assets/images/dw/dronecap/DJI_0133 (2).JPG",
                "assets/images/dw/dronecap/DJI_0133.JPG",
                "assets/images/dw/dronecap/DJI_0134 (2).JPG",
                "assets/images/dw/dronecap/DJI_0134.JPG",
                "assets/images/dw/dronecap/DJI_0135 (2).JPG",
                "assets/images/dw/dronecap/DJI_0135.JPG",
                "assets/images/dw/dronecap/DJI_0136.JPG",
                "assets/images/dw/dronecap/DJI_0137.JPG",
                "assets/images/dw/dronecap/DJI_0138.JPG",
                "assets/images/dw/dronecap/DJI_0139.JPG",
                "assets/images/dw/dronecap/DJI_0140.JPG",
                "assets/images/dw/dronecap/DJI_0141.JPG",
                "assets/images/dw/dronecap/DJI_0142.JPG",
                "assets/images/dw/dronecap/DJI_0143.JPG",
                "assets/images/dw/dronecap/DJI_0144.JPG",
                "assets/images/dw/dronecap/DJI_0145.JPG",
                "assets/images/dw/dronecap/DJI_0146.JPG",
                "assets/images/dw/dronecap/DJI_0147.JPG",
                "assets/images/dw/dronecap/DJI_0148.JPG",
                "assets/images/dw/dronecap/DJI_0149.JPG",
                "assets/images/dw/dronecap/DJI_0150.JPG",
                "assets/images/dw/dronecap/DJI_0151.JPG",
                "assets/images/dw/dronecap/DJI_0152.JPG",
                "assets/images/dw/dronecap/DJI_0153.JPG",
                "assets/images/dw/dronecap/DJI_0154.JPG",
                "assets/images/dw/dronecap/DJI_0155.JPG",
                "assets/images/dw/dronecap/DJI_0156.JPG",
                "assets/images/dw/dronecap/DJI_0157.JPG",
                "assets/images/dw/dronecap/DJI_0158.JPG",
                "assets/images/dw/dronecap/DJI_0159.JPG",
                "assets/images/dw/dronecap/DJI_0160.JPG",
                "assets/images/dw/dronecap/DJI_0161.JPG",
                "assets/images/dw/dronecap/DJI_0162.JPG",
                "assets/images/dw/dronecap/DJI_0163.JPG",
                "assets/images/dw/dronecap/DJI_0164.JPG",
                "assets/images/dw/dronecap/DJI_0165.JPG",
                "assets/images/dw/dronecap/DJI_0166.JPG",
                "assets/images/dw/dronecap/DJI_0167 (2).JPG",
                "assets/images/dw/dronecap/DJI_0167.JPG",
                "assets/images/dw/dronecap/DJI_0168 (2).JPG",
                "assets/images/dw/dronecap/DJI_0168.JPG",
                "assets/images/dw/dronecap/DJI_0169 (2).JPG",
                "assets/images/dw/dronecap/DJI_0169.JPG",
                "assets/images/dw/dronecap/DJI_0170 (2).JPG",
                "assets/images/dw/dronecap/DJI_0170.JPG",
                "assets/images/dw/dronecap/DJI_0171 (2).JPG",
                "assets/images/dw/dronecap/DJI_0171.JPG",
                "assets/images/dw/dronecap/DJI_0172 (2).JPG",
                "assets/images/dw/dronecap/DJI_0172.JPG",
                "assets/images/dw/dronecap/DJI_0173 (2).JPG",
                "assets/images/dw/dronecap/DJI_0173.JPG",
                "assets/images/dw/dronecap/DJI_0174.JPG",
                "assets/images/dw/dronecap/DJI_0175.JPG",
                "assets/images/dw/dronecap/DJI_0176.JPG",
                "assets/images/dw/dronecap/DJI_0177.JPG",
                "assets/images/dw/dronecap/DJI_0178.JPG",
                "assets/images/dw/dronecap/DJI_0179.JPG",
                "assets/images/dw/dronecap/DJI_0180.JPG",
                "assets/images/dw/dronecap/DJI_0181.JPG",
                "assets/images/dw/dronecap/DJI_0182.JPG",
                "assets/images/dw/dronecap/DJI_0183.JPG",
                "assets/images/dw/dronecap/DJI_0184.JPG",
                "assets/images/dw/dronecap/DJI_0185.JPG",
                "assets/images/dw/dronecap/DJI_0186.JPG",
                "assets/images/dw/dronecap/DJI_0187.JPG",
                "assets/images/dw/dronecap/DJI_0201.JPG",
                "assets/images/dw/dronecap/DJI_0202.JPG",
                "assets/images/dw/dronecap/DJI_0203.JPG",
                "assets/images/dw/dronecap/DJI_0204.JPG",
                "assets/images/dw/dronecap/DJI_0205.JPG",
                "assets/images/dw/dronecap/DJI_0206.JPG",
                "assets/images/dw/dronecap/DJI_0207.JPG"
            ]
        },
        {
            "big_title": "Desa Sariwangi",
            "big_img": "assets/images/sw/dronecap/DJI_0002.JPG",
            "judul_penelitian": "Tes",
            "peneliti": "Lorem ipsum",
            "deskripsi": "-",
            "tanggal_penelitian": "10-10-2020",
            "tempat_penelitian": "Cianjur",
            "coord_map": [-6.854306, 107.065604],
            "coord_marker": [-6.853606, 107.065386],
            "doc": "assets/docs/sw/Dokumen_Contoh.txt",
            "src_360": {
                "file": "assets/images/sw/threesixty/contour_360.png",
                "title": "3D Mapping Lokasi Desa Wisata Sariwangi"
            },
            "src_3d": [
                {"top_file": "assets/images/sw/3d/1.png", "bottom_file": "assets/images/sw/3d/1a.png"},
                {"top_file": "assets/images/sw/3d/2.png", "bottom_file": "assets/images/sw/3d/2a.png"},
                {"top_file": "assets/images/sw/3d/3.png", "bottom_file": "assets/images/sw/3d/3a.png"}
            ],
            "src_nav": [
                "assets/images/sw/dronecap/DJI_0002.JPG",
                "assets/images/sw/dronecap/DJI_0003.JPG",
                "assets/images/sw/dronecap/DJI_0004.JPG"
            ]
        }
    ]
}`)