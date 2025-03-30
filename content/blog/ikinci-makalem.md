# Bu benim ikinci makalem

# Authentication Sistemi

**BERTAN ÖRÜÇ**  
**BİLGİSAYAR PROGRAMCISI**  

## Giriş  
Authentication Sistemi günümüz kullanıcılarının dostudur. Bu sistem, uygulamalarımızda verilerimizi korumamıza yardımcı olur. Web siteleri, uygulamalar ve diğer hizmetlerde yetkisiz veya izinsiz girişleri engellemek için kullanılır. Bu makalede authentication sistemini inceleyeceğiz.  

---

## 1. Authentication Nasıl Çalışır?  

Kimlik doğrulama süreci genellikle 3 adımda gerçekleşir:  

1. **Kimlik bilgilerinin alınması**: Kullanıcının giriş ekranında ad, soyad, e-posta ve şifre gibi bilgileri alarak sisteme kaydedilir.  
2. **Bilgilerin doğrulanması**: Sistemin veri tabanına kaydedilmiş bilgiler ile giriş yapan kullanıcının bilgileri karşılaştırılır. Doğrulama başarılı olursa giriş sağlanır.  
3. **Erişim yetkisinin verilmesi**: Kullanıcı doğrulandıktan sonra oturum açma izni verilir.  

---

## 2. Authentication Türleri  

Kimlik doğrulamanın çeşitli yöntemleri vardır. En yaygın olanları şunlardır:  

### 2.1 Şifre Tabanlı Authentication  
En yaygın kimlik doğrulama yöntemi olan şifre tabanlı authentication, kullanıcıların e-posta veya kullanıcı adı ile bir şifre belirleyerek giriş yapmasını sağlar. Ancak zayıf şifreler güvenlik açıklarına yol açabilir.  

### 2.2 Token Tabanlı Authentication (JWT, OAuth 2.0)  
JWT (JSON Web Token) gibi yöntemler, oturum yönetimini kolaylaştırır. Kullanıcı doğrulandıktan sonra bir token oluşturulur ve bu token, kullanıcı oturumu süresince doğrulama için kullanılır.  

### 2.3 Çok Faktörlü Authentication (MFA)  
MFA, kullanıcının kimliğini doğrulamak için birden fazla yöntem kullanır. Örneğin, giriş yaparken hem şifre hem de SMS ile gönderilen tek kullanımlık kod (OTP) gerektirir.  

### 2.4 Biyometrik Authentication  
Biyometrik doğrulama, kullanıcının fiziksel özelliklerini (parmak izi, yüz tanıma, retina taraması) kullanarak kimlik doğrulama yapar. Apple’ın Face ID veya Touch ID gibi sistemleri bu yöntemi kullanmaktadır.  

### 2.5 Single Sign-On (SSO)  
SSO, kullanıcıların tek bir hesap ile birden fazla servise giriş yapmasını sağlar. Örneğin, Google veya Facebook ile giriş yaparak farklı platformlara erişim sağlanabilir.  

---

## 3. Güvenli Authentication İçin En İyi Uygulamalar  

Kimlik doğrulamanın güvenli hale getirilmesi için en iyi uygulamalar:  

1. **Güçlü şifre politikaları**: Kullanıcıların uzun ve karmaşık şifreler oluşturması istenir.  
2. **Şifre hashleme ve şifreleme**: Şifreler açık metin olarak saklanmamalıdır. `bcrypt`, `Argon2` gibi hash algoritmaları kullanılmalıdır.  
3. **İki Faktörlü Authentication (2FA)**: Kullanıcılar ek güvenlik için 2FA kullanmalıdır.  
4. **Yetkilendirme ve erişim kontrolleri**: Kullanıcılara yalnızca yetkilendirildikleri verilere erişim sağlanmalıdır.  

---

## 4. Authentication ve Authorization Arasındaki Fark  

Authentication (kimlik doğrulama) ve Authorization (yetkilendirme) genellikle karıştırılır, ancak farklı görevleri vardır:  

- **Authentication**: Kullanıcının kim olduğunu doğrulamak için kullanılır.  
- **Authorization**: Kullanıcının hangi kaynaklara erişebileceğini belirler.  

---

## 5. Modern Authentication Teknolojileri ve Geleceği  

Kimlik doğrulama sistemleri daha güvenli hale gelmek için sürekli gelişmektedir. Günümüzde kullanılan modern teknolojiler şunlardır:  

- **OAuth 2.0 ve OpenID Connect**: Kimlik doğrulama ve yetkilendirme süreçlerini yöneten açık standartlar.  
- **WebAuthn ve FIDO2**: Parolasız giriş sistemleri ve biyometrik doğrulama yöntemleri.  
- **Zero Trust Security Model**: Kullanıcıların sürekli doğrulanmasını gerektiren güvenlik odaklı bir model.  

---

## Sonuç  

Dijital dünyada verilerimizi korumanın en önemli yollarından biri kimlik doğrulama sistemleridir. Güçlü şifreleme, çok faktörlü doğrulama gibi yöntemlerle güvenlik artırılabilir. Gelecekte biyometrik verilerle şifresiz kimlik doğrulama yöntemlerinin daha yaygın olması beklenmektedir.  

---

## Kaynakça  

1. [OAuth 2.0](https://oauth.net/2/)  
2. [OWASP Authentication Cheat Sheet](https://owasp.org/www-project-authentication-cheat-sheet/)  
3. [WebAuthn](https://www.w3.org/TR/webauthn/)  
4. [Authentication Nedir?](https://www.sbsmedya.com/blog/authentication-nedir)  
5. [Frontegg Authentication](https://frontegg.com/blog/authentication)  

---

## Authentication Sistemi Şeması  

1. Kullanıcı giriş yapar.  
2. Bilgiler sunucuya gönderilir.  
3. Kullanıcı verileri veritabanında doğrulanır.  
4. Bilgiler doğruysa giriş izni verilir.  
5. Bilgiler yanlışsa giriş reddedilir.  
6. Kullanıcıya ek güvenlik seçenekleri sunulur.  
7. Kullanıcı, biyometrik doğrulama gibi ek güvenlik önlemlerini seçebilir.  
