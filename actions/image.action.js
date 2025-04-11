"use server"



export async function uploadImageToNodejs(formData, url) {
    try {

        // const formData = new FormData();
        // formData.append('image', imageFile);

        const response = await fetch(process.env.NodeJs_Url + url, {
            method: 'POST',
            body: formData, // Send FormData directly
        });

        const data = await response.json();
        const filename = data?.file?.filename;

        if (!filename) {
            throw new Error('Filename not found in the response');
        }

        return {imageUrl:process.env.NodeJs_Url +"/public/" +url + "/" + filename, base64Placeholder : data?.base64Placeholder};  
    } catch (error) {
        console.error('Error uploading the image:', error.message);
        throw error;
    }
}

export async function deleteImageFromNodejs(url,imageUrl) {
    const filenameTable = imageUrl?.split("/");
    const filename = filenameTable[filenameTable?.length - 1];
    console.log("filename : ",filename)
    try {
      const response = await fetch(process.env.NodeJs_Url + url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ filename }),
      });
  
      if (!response.ok) {
        throw new Error(`Failed to delete image: ${response.statusText}`);
      }
  
      const result = await response.json();
      console.log('Image deleted successfully:', result);
      return result;
    } catch (error) {
      console.error('Error deleting the image:', error.message);
      throw error;
    }
  }
  
