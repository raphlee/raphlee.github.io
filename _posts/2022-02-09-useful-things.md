---
layout: post
title: Useful things
readtime: true
tags: [useful, thing]
---

### 1. Download Custom NDK via command
You can also open a terminal window in your _'SDK\tools\bin'_ folder... and type:


```console
sdkmanager "ndk-bundle" "ndk;19.0.5232133"
```

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


Maybe you can create a plist file (config to RunAtLoad (run at login)) that have arguments that refer to specific shell script path, and then add to launch via command: 

```console
launchctl load <plist file>
```

This way everytimes you login, the service will run automatically by system.


### 5. Lighting

Tips: [7 tips for better lighting in Unity](https://medium.com/@EightyLevel/7-tips-for-better-lighting-in-unity-686694892ece)


### 6. Color
Color Harmony: [Link](https://www.tigercolor.com/color-lab/color-theory/color-harmonies.htm)


### 7. Shadow and things
We can use Depth setup for Camera to capture the Depth of scene then use that capture as RawImage Texture to apply to surface’s material to draw shadow on that.  
=> That requires writing a shader to adapt shadow implementation.

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

Có một dịch vụ chuyển phát trung gian có tên [Hợp Nhất](https://hopnhat.com/van-chuyen-hang-hoa-den-kho-amazon). Doanh nghiệp này liên kết với mạng lưới chuyển phát của Amazon tại Hoa Kỳ và Việt Nam. Ta có thể dùng dịch vụ này và lấy địa chỉ bưu điện do [Hợp Nhất](https://hopnhat.com/van-chuyen-hang-hoa-den-kho-amazon) cung cấp (bưu điện ở Hoa Kỳ) để đăng ký Amazon.

Khi đơn hàng được chuyển về, [Hợp Nhất](https://hopnhat.com/van-chuyen-hang-hoa-den-kho-amazon) sẽ vận chuyển về Việt Nam và tính phí dựa vào việc chuyển phát này.


### 10. PORT
[Wikipedia List Ports](https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers)


**Well-known ports**  
The port numbers in the range from 0 to 1023 (0 to 2^10 − 1) are the well-known ports or system ports.

**Registered ports**  
The range of port numbers from 1024 to 49151 (2^10 to 2^14 + 2^15 − 1) are the [Registered ports](https://en.wikipedia.org/wiki/Registered_port).


**Dynamic, private or ephemeral ports**  
The range 49152 – 65535 (2^15 + 2^14 to 2^16 − 1) contains dynamic or private ports that cannot be registered with IANA. 


| Port Number | Represent |
| :------ |:--- |
| 22 | Secure Shell (SSH), secure logins, file transfers (scp, sftp) and port forwarding |
| 80, 8080 | HTTP |
| 443 | HTTPS |
| 4848 | GlassFish server |


### 11. Unity iOS build via sh
Requires:
- Generated password by iTuneConnect to validate/upload in: [Apple Account](https://appleid.apple.com/account/manage)

- Provisioning Profile must compatible with Cerfiticate that machine registered on iTuneConnect. And it must be iOS Distribution type to allows upload.

- Unlock keychain on its session (put _unlock_ command inside sh file) before build XCode.

```console
security unlock-keychain -p <password> <login.keychain>
```
<br/>

- XCode-select error: tool _‘x’_ requires XCode, but...

```console
sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
```
<br/>

- Fatal error: “Please provide an auth token with **USYM_UPLOAD_AUTH_TOKEN** environment variable"
    - In _iOSPostProcessBuild_ we add:
    
```cs
project.SetBuildProperty(guid, "USYM_UPLOAD_AUTH_TOKEN", "FakeToken");
```
<br/>

- On Unity 2019.x, in build command, you must provide account and Serial ID to avoid this **“USYM_UPLOAD_AUTH_TOKEN”** fatal error above.


### 12. Android SHA-1 Cerfiticate
When an app is opt-in to build app bundle aab file. This have 2 different SHA-1 according to user keystore and another one generated by Google itself.

So when you create game service (achievement, leaderboard, etc) you must link app 2 times with different SHA-1 to avoid error sign in.

You need to notice things on: [Google Developer Console](https://console.developers.google.com/)  
Maybe you have to add extra OAuth Client IDs on Credentials.

### 13. Shell script

```console
VARIABLE=$(Command)
```


### 14. Octree
[Wikipedia - Octree](https://vi.wikipedia.org/wiki/Octree)  
[GameDev - Introduction to Octrees](https://www.gamedev.net/articles/programming/general-and-gameplay-programming/introduction-to-octrees-r3529/)

Cây **octree** là một cấu trúc dữ liệu dạng cây mà mỗi nút trong có chính xác tám con. Cây octree thường được sử dụng để phân chia không gian ba chiều bằng việc chia đệ quy không gian ra thành 8 phần. Cây octree là một cấu trúc trong không gian ba chiều tương tự như cây quadtree.


### 15. Junction Folders

Any changes will occurs in both folders

On Window: 

```console
mklink /J "path/to/folder/A" "path/to/folder/B"
```

On MacOS:

```console
ln -s "path/to/folder/A" "path/to/folder/B"
```


### 16. Exclusion Lower-end Device on Google Play
On Device-Catalog:

- Choose device  
OR
- Create rules to filter


### 17. Unity Asset Compression

- For Texture: [Texture Compression](http://blog.theknightsofunity.com/wrong-import-settings-killing-unity-game-part-1/).
- For Audio: [Audio Compression](https://blog.theknightsofunity.com/wrong-import-settings-killing-unity-game-part-2/).


### 18. Temporary Backup Files on Unity

- Unity actually saves your scene anytime you hit the play button. So if you happen to have caused unity to crash in play mode, you might be in luck.
- Before you re-open Unity again, go to direction below, in here you'll find either one or a list of .backup files. These files were scenes that were loaded during play mode when it crashed.

```console
"/path/to/your/Unity/project/Temp/__Backupscenes/xyz.backup"
```
<br/>

- So if you rename these to a .unity files and copy them out and back to your Assets folder, you have a somewhat auto saved version of your files.


### 19. Locking and Duplicating the Unity Inspector

- To add another Inspector (duplicate), follows the image below:

![Duplicate Inpector](/assets/img/duplicate-inspector.png){: .mx-auto.d-block :}


### 20. Swap inherited Components in Unity Debug Mode

- Only works in **inherited Components**. In Debug Mode you can do:

![Swap Inherited Component](/assets/img/swap-inherited-comp.png){: .mx-auto.d-block :}


### 21. Polymorphic Lists

- Add attribute **[SerializeReference]** to your list as example:

```cs
[CreateAssetMenu(menuName = "Polymorphic SO")]
public class PolymorphicSO : ScriptableObject
{  
    [SerializeReference]  
    public List<BaseClass> lists = new List<BaseClass>();
}

/// The base and child classes.
[Serializable]
public class BaseClass
{
    public int Integer;
}

[Serializable]
public class ChildClass : BaseClass
{
    public string String;
}
```

### 22. Get icons from Unity Objects

```cs
EditorGUIUtility.ObjectContent(CreateInstance<T>(), typeof(T));
```
<br/>

- You can find Unity Default Icon name in this [Unity Icon](https://github.com/halak/unity-editor-icons), by using:

```cs
EditorGUIUtility.IconContent("SceneAsset Icon").image;
```


### 23. Embedded SO Editing

- You can you [API](https://docs.unity3d.com/ScriptReference/Editor.CreateCachedEditor.html) below to draw your SO inside other Component's inspector.

```cs
Editor.CreateCachedEditor
```
<br/>

- By this API, you can create an PropertyAttribute to add to your SO properties, the a custom PropertyDrawer to draw it as following:

![Custom PropertyDrawer](/assets/img/custom-drawer.png){: .mx-auto.d-block :}


### 24. Another Unity stuff

- [Modal Window](https://docs.unity3d.com/2020.1/Documentation/ScriptReference/EditorWindow.ShowModal.html) that prevent you click outside.

- **[MovedFrom]** Attribute is useful when you need to change className or moving its type and doesn't want to loose any data on it.
```cs
[UnityEngine.Scripting.APIUpdating.MovedFrom(string sourceName, bool isInDifferentAssembly)]
```

### 25. Outline

- [5 Ways to Draw an Outline](https://alexanderameye.github.io/notes/rendering-outlines/)
