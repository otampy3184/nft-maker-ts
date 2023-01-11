import { Input } from "@mui/material";
import { CIDString, Web3File, Web3Storage } from "web3.storage"

const API_KEY = "eyJzdWIiOiJkaWQ6ZXRocjoweDEyZUM3OTFBREM0NGYyMmI0ODlmNEYxQTk1ODk2ODM2M0RGRUVGNzAiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjUyMzU4NjIzMTgsIm5hbWUiOiJuZnQtbWFrZXIifQ"

export function UploadToIPFS(props: IPFSProps) {
    const putImage = async (client: Web3Storage, image: any) => {
        const rootCid = await client.put(image.files, {
            name: 'metadata',
            maxRetries: 3
        }) 
        return rootCid
    }

    const retriveFiles = async (client: Web3Storage, cid: CIDString) => {
        const respone = await client.get(cid)
        if (!respone) throw new Error("cannot retrive fiiles")
        const files = await respone.files()
        return files
    }

    const uploadToIPFS = async (e: any) => {
        props.setterIsLoading(true)
        const client = new Web3Storage({ token: API_KEY })
        const image = e.target

        const rootCid: CIDString = await putImage(client, image)
        const files: Web3File[] = await retriveFiles(client, rootCid)

        for (const file of files) {
            props.setterResult(file.cid)
        }
    } 

    return (
        <div>
            <input className="imageToIpfs" name="upload" type="file" accept=".jpg, .png" onChange={uploadToIPFS} />
            {props.result}
        </div>
    )
}