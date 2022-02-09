---
layout: post
title: Useful things
readtime: true
tags: [useful, thing]
---

### 1. Download Custom NDK via command
You can also open a terminal window in your 'SDK\tools\bin' folder... and type:

{: .box-note}
sdkmanager "ndk-bundle" "ndk;19.0.5232133"

This should download and install the required NDK version inside your SDK folder. You can later move it to another location or reference it from this one.


### 2. Create Sticker Pack for your Unity Game
You can create stickers pack for Game using Unity3D.

- Plugin: [Github Repos](https://github.com/agens-no/iMessageStickerUnity)
- Manual:  [Blog Thread](http://dilmergames.com/blog/2017/04/15/unity3d-creating-stickers-your-ios-unity-game/)


### 3. Body Language
TED: [Youtube Link 1](https://www.youtube.com/watch?v=Ks-_Mh1QhMc)

WIRED: [Youtube Link 2](https://www.youtube.com/watch?v=4jwUXV4QaTw)


### 4. Create Automation App
You can create an automation app that do something for you like run shell script on MacOS.

To run app when login, simply add the automation app to Login item on Settings.


Maybe you can create a plist file (config to RunAtLoad (run at login) that have arguments that refer to specific shell script path, and then add to launch via command: 

{: .box-note}
launchctl load ``<plist file>``

This way everytimes you login, the service will run automatically by system.


### 5. Lighting

Tips: [7 tips for better lighting in Unity](https://medium.com/@EightyLevel/7-tips-for-better-lighting-in-unity-686694892ece)


### 6. Color
Color Harmony: [Link](https://www.tigercolor.com/color-lab/color-theory/color-harmonies.htm)


### 7. Shadow and things
We can use Depth setup for Camera to capture the Depth of scene then use that capture as RawImage Texture to apply to surface’s material to draw shadow on that.  
-> That requires writing a shader to adapt shadow implementation.

Idea: [Idea Link](https://www.littlechicken.nl/shadows/)

Projector:
[Projector Link 1](https://docs.unity3d.com/Manual/class-Projector.html),
[Projector Link 2](https://forum.unity.com/threads/how-to-get-fake-shadows-like-that.386450/)

Mobile Essential: [Unity Pack Demo](https://www.youtube.com/watch?v=uCAonqAOeTY&list=PLX2vGYjWbI0TqhYQCgUgrS_KACZadVRXU&index=7)


Shader Mobile: [Mobile Shader Essentials: Lit/Unlit](https://assetstore.unity.com/packages/vfx/shaders/mobile-shader-essentials-lit-unlit-138629)


### 8. Gestures
Asset: [Fingers - Touch Gestures for Unity](https://assetstore.unity.com/packages/tools/input-management/fingers-touch-gestures-for-unity-41076)


### 9. Amazon Post Office
Hiện tại dịch vụ chuyển phát của Amazon chưa chạm tới Việt Nam (chưa support) nên khi đăng ký tài khoản Amazon, chúng ta không nên đăng ký bất kỳ địa chỉ bưu điện nào ở Việt Nam.

Có một dịch vụ chuyển phát trung gian có tên Hợp Nhất. Doanh nghiệp này liên kết với mạng lưới chuyển phát của Amazon tại Hoa Kỳ và Việt Nam. Ta có thể dùng dịch vụ này và lấy địa chỉ bưu điện do Hợp Nhất cung cấp (bưu điện ở Hoa Kỳ) để đăng ký Amazon.

Khi đơn hàng được chuyển về, Hợp Nhất sẽ vận chuyển về Việt Nam và tính phí dựa vào việc chuyển phát này.

Link: [Hợp Nhất](https://hopnhat.com/van-chuyen-hang-hoa-den-kho-amazon)


### 10. PORT
[Wikipedia List Ports](https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers)


**Well-known ports**  
The port numbers in the range from 0 to 1023 (0 to 2^10 − 1) are the well-known ports or system ports.

**Registered ports**  
The range of port numbers from 1024 to 49151 (2^10 to 2^14 + 2^15 − 1) are the [Registered ports](https://en.wikipedia.org/wiki/Registered_port).


**Dynamic, private or ephemeral ports**  
The range 49152–65535 (2^15 + 2^14 to 2^16 − 1) contains dynamic or private ports that cannot be registered with IANA. 


| Port | Represent |
| :------ |:--- |
| 22 | Secure Shell (SSH), secure logins, file transfers (scp, sftp) and port forwarding |
| 80, 8080 | HTTP |
| 443 | HTTPS |
| 4848 | GlassFish server |


### 11. Unity iOS build via sh
Requires:
- Generated password by iTuneConnect to validate/upload
    - URL: [AppleID Account Manage](https://appleid.apple.com/account/manage)

- Provisioning Profile must compatible with Cerfiticate that machine registered on iTuneConnect. And it must be iOS Distribution type to allows upload.

- Unlock keychain on its session (put unlock command inside sh file) before build xcode.

{: .box-note}
security unlock-keychain -p ``<password> <login.keychain>``

- Xcode-select error: tool ‘x’ requires Xcode, but...

{: .box-note}
sudo xcode-select -s /Applications/Xcode.app/Contents/Developer

- Fatal: “Please provide an auth token with USYM_UPLOAD_AUTH_TOKEN environment variable
    - iOSPostProcessBuild

{: .box-note}
project.SetBuildProperty(guid, “USYM_UPLOAD_AUTH_TOKEN”, “FakeToken”);

- On Unity 2019.x, in build command, you must provide account and serial id to avoid this “USYM_UPLOAD_AUTH_TOKEN” fatal error above.


### 12. Android SHA-1 Cerfiticate
When an app is opt-in to build app bundle aab file. This have 2 different SHA-1 according to user keystore and another one generated by Google itself. 

So when you create game service (achievement, leaderboard, etc) you must link app 2 times with different SHA-1 to avoid error sign in.

You need to notice things on: [Google Developer Console](https://console.developers.google.com/)  
Maybe you have to add extra OAuth Client IDs on Credentials.

### 13. Shell script

{: .box-note}
VARIABLE=$(Command)


### 14. Octree
[Wikipedia - Octree](https://vi.wikipedia.org/wiki/Octree)  
[GameDev - Introduction to Octrees](https://www.gamedev.net/articles/programming/general-and-gameplay-programming/introduction-to-octrees-r3529/)

Cây **octree** là một cấu trúc dữ liệu dạng cây mà mỗi nút trong có chính xác tám con. Cây octree thường được sử dụng để phân chia không gian ba chiều bằng việc chia đệ quy không gian ra thành 8 phần. Cây octree là một cấu trúc trong không gian ba chiều tương tự như cây quadtree.


### 15. Junction Folders
On Window: 

{: .box-note}
mklink /J “path/to/folder/A” “path/to/folder/B”

(Any changes will occurs in both folders)


On MacOS:

{: .box-note}
ln -s “path/to/folder/A” “path/to/folder/B”


### 16. Exclusion Lower-end Device on Google Play
On Device-Catalog:

- Choose device  
OR
- Create rules to filter


### 17. Unity Asset Compression

- For Texture: [Texture Compression](http://blog.theknightsofunity.com/wrong-import-settings-killing-unity-game-part-1/)
- For Audio: [Audio Compresion](https://blog.theknightsofunity.com/wrong-import-settings-killing-unity-game-part-2/)

