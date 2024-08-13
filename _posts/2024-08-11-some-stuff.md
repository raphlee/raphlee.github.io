---
layout: post
title: Some Stuff
readtime: true
tags: [useful, stuff]
---

### 1. VAT - [Vertex Animation Texture](https://medium.com/tech-at-wildlife-studios/texture-animation-techniques-1daecb316657)

- Known as Morphing Animation, consists of baking animations into a texture map for use later in the vertex shader.
- To store the vertical and normal position information we chose to use the RGBAHalf texture. This format gives us 16bits per channel. We, then, map our matrix in such a way that we write:

```
Vector3 (x, y, z) -> Vector3 (r, g, b)
```

![Sample Generated texture](/assets/img/sample_vat_tex.webp){: .mx-auto.d-block :}


- **SHADER**  
. In the vertex shader, we sample the texture using the tuple [_vertexId, animFrame_]

```
struct appdata
{
  uint vertexId : SV_VertexID;
};

v2f vert (appdata v)
{
  float vertCoords = v.vertexId;
  float animCoords = 0;
  float4 texCoords = float4(vertCoords, animCoords, 0, 0);
  float4 position  = tex2Dlod(_AnimVertexTex, texCoords);
  
  v2f o;
  // Use position values as a standard local space coordinates
  o.vertex = UnityObjectToClipPos(position);
  return o;
}
```

- Animating  
. To animate the character, we just need to vary the sampled line based on the current time.

```
_AnimVertexTex_TexelSize = Vector4 (1/width, 1/height, width, height);
float animCoords         = frac (_Time.y * _AnimVertexTex_TexelSize.y);
```

- Limitation  
. Since the texture has the width equal to the number of mesh vertices, we have the limitation of not being able to use meshes larger than 2048 vertices.  
. Number of animations will determine how large texture is.

- Usages  
. [Soft Body](https://sidefxlabs.artstation.com/projects/5XJZV8)  
. [Rigid Body Dynamic](https://storyprogramming.com/2019/09/18/shader-graph-rigid-body-animation-using-vertex-animation-textures/)  
. [Dynamic Remeshing](https://www.youtube.com/watch?v=AUdxoRHlYSk&list=PLXNFA1EysfYn686NxzYbKxm845eOIwDPA&index=10)  
. [Particle Sprites](https://www.youtube.com/watch?v=sZ6gT1uvJJc&list=PLXNFA1EysfYn686NxzYbKxm845eOIwDPA&index=6)


***

### 2. SUVAT - [Equations of motion](https://www.ncl.ac.uk/webtemplate/ask-assets/external/maths-resources/mechanics/kinematics/equations-of-motion.html)


| Variables | Descriptions | Unit
| :------ |:----- |:---
| **S** | Displacement | m
| **U** | Initial Velocity | m/s
| **V** | Final Velocity | m/s
| **A** | Acceleration | m/s^2
| **T** | Time | s
|

  
Equations:  
```
V   = U + AT  
S   = (U + V) / 2 * T
V^2 = U^2 + 2 * AS  
S   = UT + 1/2 * AT^2  
S   = VT - 1/2 * AT^2 
```


***

### 3. The [Blending](https://learnopengl.com/Advanced-OpenGL/Blending)

- Blending in OpenGL is commonly known as the technique to implement transparency within objects

```
Blending = Src * A +- Dst * B
```

> Blending is about modify: ```A, B and Operator```



| Signature | Example syntax | Note
| :------ |:----- |:------
| _Blend <.state>_ | _Blend Off_ | Disables blending for the default render target. This is the default value.
| _Blend <.source factor> <.destination factor>_ | _Blend SrcAlpha OneMinusSrcAlpha_ | Alpha Blending 


***

### 4. [Bézier](https://en.wikipedia.org/wiki/B%C3%A9zier_curve)

- A Bézier Curve is a parametric curve used in computer graphics and related fields. A set of discrete "control points" defines a smooth, continuous curve by means of a formula.

![Linear](/assets/img/bezier_linear.gif)  ![Quadratic](/assets/img/bezier_quadratic.gif) 


| Curve | Formula | Note
| :------ |:----- |:------
| Linear Bézier | _B(t) = **P0** + t * (**P1** - **P0**)_ | 2 control points ~ Lerp (Linear Interpolation)
| Quadratic Bézier | _B(t) = (1 - t)^2 * **P0** + 2(1 - t) * t * **P1** + t^2 * **P2**_ | 3 control points
| Cubic Bézier | ... | ...

- Freya Holmér Video will explain Bézier in more details: [The Beauty of Bézier Curves](https://www.youtube.com/watch?v=aVwxzDHniEw)

---
---

> **Inverse Lerp** 
```
t = (v - a) / (b - a)
```

![Inverse Lerp](/assets/img/inverse_lerp.gif){: .mx-auto.d-block :}

---
---
To Uniform Animation (moving) in Bézier we use: [Arc Length Parameterization](https://math.libretexts.org/Bookshelves/Calculus/Calculus_3e_(Apex)/11%3A_Vector-Valued_Functions/11.05%3A_The_Arc_Length_Parameter_and_Curvature)


![Introducing the arc length parameter](/assets/img/arc_length.PNG){: .mx-auto.d-block :}

---

