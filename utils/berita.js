// const request = require("postman-request");

// function getBerita(apiKey, query) {
//   const apiUrl = `http://api.mediastack.com/v1/news?access_key=${apiKey}&q=${query}`;
//   request({ url: url, json: true }, (error, response) => {
//     if (error) {
//       callback("Tidak dapat terkoneksi ke layanan", undefined);
//     } else if (response.body.error) {
//       callback("Tidak dapat menemukan lokasi", undefined);
//     } else {
//       callback(
//         undefined,
//         "Judul Berita: " +
//           response.body.data.title +
//           ". " +
//           "Deskripsi: " + // Tambahkan titik dua setelah "Deskripsi"
//           response.body.data.description +
//           " " + // Tambahkan spasi setelah "Deskripsi" dan sebelum "Sumber"
//           "Sumber: " + // Tambahkan titik dua setelah "Sumber"
//           response.body.data.source +
//           " nm. " + // Tambahkan spasi sebelum "nm" jika dibutuhkan
//           response.body.data.image +
//           " kilometer"
//       );
//     }
//   });
// }

// // // app.get("/berita", async (req, res) => {
// // //   try {
// // //     const urlApiMediaStack = "http://api.mediastack.com/v1/news";
// // //     const apiKey = "15fb3c44b816802a76827129a7202e47";

// // //     const params = {
// // //       access_key: apiKey,
// // //       countries: "id",
// // //     };

// // //     const response = await axios.get(urlApiMediaStack, { params });
// // //     const dataBerita = response.data;

// // //     res.render("berita", {
// // //       nama: "Farel Fahlevi",
// // //       judul: "Laman Berita",
// // //       berita: dataBerita.data,
// // //     });
// // //   } catch (error) {
// // //     console.error(error);
// // //     res.render("error", {
// // //       judul: "Terjadi Kesalahan",
// // //       pesanKesalahan: "Terjadi kesalahan saat mengambil berita.",
// // //     });
// // //   }
// // // });

// module.exports = getBerita;
