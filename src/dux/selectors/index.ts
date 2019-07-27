export const getImageGallery = (
  imageGalleries: any,
  accountId: number
) =>
  imageGalleries.length
    ? imageGalleries.find(
        (img: any) => img.account_id === accountId
      )
    : null;
