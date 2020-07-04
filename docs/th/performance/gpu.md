# ความเข้าใจผิดเกี่ยวกับการใช้งาน GPU ระดับสูง

ส่วนใหญ่แล้วตัวจัดการงานของ Windows จะไม่แสดงค่าการใช้งาน GPU จริง สิ่งนี้ทำให้เกิดความสับสนอย่างมาก ค่าการใช้งาน GPU จะไม่สนใจ *สถานะพลังงาน* และความเร็วสัญญาณนาฬิกาของการ์ดจอซึ่งทำให้ค่าที่แสดงไม่ถูกต้องและมักจะแสดงค่าที่สูงกว่ามาก หากต้องการดูการใช้งาน GPU จริงให้ใช้เครื่องมือเช่น GPU-Z:

* [ดาวน์โหลด GPU-Z](https://www.techpowerup.com/gpuz/)

## ค้นหาค่าการประมวลผลที่แท้จริงของ GPU

หลังจากติดตั้ง GPU-Z โปรดตรวจสอบแท็บ“ เซ็นเซอร์” สำหรับความเร็วสัญญาณนาฬิกาของ GPU และค่าการประมวลผลของ GPU:

![Real GPU usage](./gpuz.png)

โปรดทราบว่า*ค่าการประมวลผลของ GPU* ในภาพหน้าจอคือ 24% อย่างไรก็ตามที่ด้านบนคุณจะเห็นว่าการ์ดจออยู่ในสถานะพลังงานต่ำที่ 202.5 MHz This is the best case scenario, although the 'usage' is displayed as 24%. The actual usage based on the max clockrate of 1823mhz is only **2.6%** *(24% * 202.5 MHz / 1823 MHz)*.

A card could have clock rates between 100 Mhz and 2000 Mhz for example. If the task manager shows 50% then **it makes a big difference whether it is 50% of 100 MHz or 50% of 2000 MHz**.

::: tip To summarize: It's important to keep the GPU clock rate in mind when looking at the GPU load. 50% of 100 MHz is better than 5% of 2000 MHz. :::

If you want to improve GPU performance:

* Disable or delete overlay and recording tools, including Geforce Experience.
* Lower the frame rate setting and disable MSAA (it does not affect the quality 2D scene wallpapers).
    * This won't influence the performance of videos, they have fixed frame rates and quality.
    * The resolution and frame rate of the video wallpapers will control these, use videos with lower FPS to reduce GPU load
* Connect your monitors to the same GPU or Windows will perform poorly while trying to merge them.