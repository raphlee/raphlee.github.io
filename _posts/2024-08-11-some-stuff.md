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
  float4 position = tex2Dlod(_AnimVertexTex, texCoords);
  
  v2f o;
  // Use position values as a standard local space coordinates
  o.vertex = UnityObjectToClipPos(position);
  return o;
}
```

- Animating  
. To animate the character, we just need to vary the sampled line based on the current time.

```shader
_AnimVertexTex_TexelSize = Vector4 (1/width, 1/height, width, height)
float animCoords = frac (_Time.y * _AnimVertexTex_TexelSize.y);
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
| S | Displacement | m
| U | Initial Velocity | m/s
| V | Final Velocity | m/s
| A | Acceleration | m/s^2
| T | Time | s

---

```math
V = U + AT  
```
```math
S = (U + V) / 2 * T
```
```math
V^2 = U^2 + 2 * AS  
```
```math
S = UT + 1/2 * AT^2  
```
```math
S = VT - 1/2 * AT^2 
```
---