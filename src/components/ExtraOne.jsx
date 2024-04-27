import PhotoAlbum from "react-photo-album";


// https://i.ibb.co/PgqpK3d/c-HJpdm-F0-ZS9sci9pb-WFn-ZXMvd2-Vic2l0-ZS8y-MDIy-LTEy-L3-Jt-Nj-E0-LWEt-Ymct-MDcw-Xz-Euan-Bn.webp
// https://i.ibb.co/svxkFWb/181943346-patr-n-cuadrado-vintage-floral-para-fondos-de-pantalla-retro-flores-antiguas-encantadas-in.jpg
// https://i.ibb.co/TvrYqtv/istockphoto-1307524820-612x612.jpg
// https://i.ibb.co/Fzwp8yn/depositphotos-502890210-stock-illustration-floral-vintage-seamless-pattern-wit.webp
// https://i.ibb.co/VwPPKTs/floral-vintage-seamless-pattern-wit-600nw-2038909094.webp
// https://i.ibb.co/hsp6xcD/antique-arts-crafts-era-wood-carving-wood-block-prints.webp
// https://i.ibb.co/CHgzPfr/images.jpg
// https://i.ibb.co/qrYCvQc/91xersg8-HGL-AC-SL1500.jpg
// https://i.ibb.co/pRGPVF1/artsandcrafts.jpg

const photos = [
    { src: "https://i.ibb.co/PgqpK3d/c-HJpdm-F0-ZS9sci9pb-WFn-ZXMvd2-Vic2l0-ZS8y-MDIy-LTEy-L3-Jt-Nj-E0-LWEt-Ymct-MDcw-Xz-Euan-Bn.webp", width: 1080, height: 800 },
    { src: "https://i.ibb.co/svxkFWb/181943346-patr-n-cuadrado-vintage-floral-para-fondos-de-pantalla-retro-flores-antiguas-encantadas-in.jpg", width: 1080, height: 1620 },
    { src: "https://i.ibb.co/TvrYqtv/istockphoto-1307524820-612x612.jpg", width: 1080, height: 720 },
    { src: "https://i.ibb.co/Fzwp8yn/depositphotos-502890210-stock-illustration-floral-vintage-seamless-pattern-wit.webp", width: 1080, height: 721 },
    { src: "https://i.ibb.co/VwPPKTs/floral-vintage-seamless-pattern-wit-600nw-2038909094.webp", width: 1080, height: 1620 },
    { src: "https://i.ibb.co/hsp6xcD/antique-arts-crafts-era-wood-carving-wood-block-prints.webp", width: 1080, height: 607 },
    { src: "https://i.ibb.co/CHgzPfr/images.jpg", width: 1080, height: 608 },
    { src: "https://i.ibb.co/qrYCvQc/91xersg8-HGL-AC-SL1500.jpg", width: 1080, height: 720 },
    { src: "https://i.ibb.co/pRGPVF1/artsandcrafts.jpg", width: 1080, height: 1549 },
    { src: "https://i.ibb.co/PgqpK3d/c-HJpdm-F0-ZS9sci9pb-WFn-ZXMvd2-Vic2l0-ZS8y-MDIy-LTEy-L3-Jt-Nj-E0-LWEt-Ymct-MDcw-Xz-Euan-Bn.webp", width: 1080, height: 720 },
    { src: "https://i.ibb.co/svxkFWb/181943346-patr-n-cuadrado-vintage-floral-para-fondos-de-pantalla-retro-flores-antiguas-encantadas-in.jpg", width: 1080, height: 694 },
    { src: "https://i.ibb.co/TvrYqtv/istockphoto-1307524820-612x612.jpg", width: 1080, height: 1620 },
    { src: "https://i.ibb.co/Fzwp8yn/depositphotos-502890210-stock-illustration-floral-vintage-seamless-pattern-wit.webp", width: 1080, height: 720 },
    { src: "https://i.ibb.co/VwPPKTs/floral-vintage-seamless-pattern-wit-600nw-2038909094.webp", width: 1080, height: 1440 },
    { src: "https://i.ibb.co/hsp6xcD/antique-arts-crafts-era-wood-carving-wood-block-prints.webp", width: 1080, height: 1620 },
    { src: "https://i.ibb.co/CHgzPfr/images.jpg", width: 1080, height: 810 },
    { src: "https://i.ibb.co/qrYCvQc/91xersg8-HGL-AC-SL1500.jpg", width: 1080, height: 610 },
    { src: "https://i.ibb.co/pRGPVF1/artsandcrafts.jpg", width: 1080, height: 160 },
    { src: "https://i.ibb.co/pRGPVF1/artsandcrafts.jpg", width: 1080, height: 810 },
    { src: "https://i.ibb.co/CHgzPfr/images.jpg", width: 1080, height: 720 },
    // { id: "xKhtkhc9HbQ", width: 1080, height: 1440 },
  ];

const ExtraOne = () => {
    return (
        <div>
            <h2 className="text-2xl font-semibold text-center mt-6 mb-6">Vintage Art & Crafts</h2>
            <PhotoAlbum layout="rows" photos={photos} />
        </div>
    );
};

export default ExtraOne;