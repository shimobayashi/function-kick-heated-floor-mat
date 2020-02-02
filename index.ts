import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export async function kickHeatedFloorMat(req, res) {
    // 電気カーペットをOFFにする
    const ret_off = await axios(`https://maker.ifttt.com/trigger/turn_off_heated_floor_mat/with/key/${process.env.IFTTT_API_KEY}`);
    // 待たないと挙動が不安定なため待つ
    await new Promise(resolve => setTimeout(resolve, 1000));
    // 電気カーペットをONにする
    const ret_on = await axios(`https://maker.ifttt.com/trigger/turn_on_heated_floor_mat/with/key/${process.env.IFTTT_API_KEY}`);

    const message = `${ret_off.data.trim()}\n${ret_on.data.trim()}`; 
    res.status(200).json({ message: message });
}