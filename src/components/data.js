const content = {
    title: "Full Stack Developer",
    subtitle: "Hakkımda",
    description: "Yönetim Bilişim Sistemleri öğrencisiyim. ASP.NET Core ile çeşitli projeler geliştirme deneyimim bulunmakta ve web programlama konusunda orta seviyedeyim. Frontend'de .Net Mvc Razor Pages kullanıyorum ve şu anda React üzerinde çalışıyorum. Ayrıca temel düzeyde Android uygulamaları geliştirebiliyor ve bu alanda kendimi daha da geliştirmek için çalışıyorum. Teknoloji ve yazılım alanındaki yetkinliklerimi, iş süreçlerini optimize eden ve yenilikçi çözümler sunan projelere dönüştürmek istiyorum.",
    myskill: "Yeteneklerim",
    skills: ["React", ".Net Core", "Ef Core", "Android Programlama", "C#", "Kotlin", "Sql", "NoSql", "Restful Api","MVC","N Tier Mimari","Dapper","JavaScript","AutoMapper","Entity Framework","Bootstrap","Html","Css","Github","Visual Studio","Visual Studio Code","Android Studio","Swagger", "Firebase", "MsSql", "SQLite", "MongoDB"]
  };
  

  const jobs = [
    {
      id: 1,
      jobTitle: "Software Developer(Stajyer)",
      companyName: "Galaksity Akıllı Şehir Teknolojileri",
      startDate: "Temmuz 2024",
      endDate: "Eylül 2024",
      description: " Bu staj dönemi boyunca, Galaksity Akıllı Şehir Teknolojileri'nde .NET Core teknolojileri kullanarak backend geliştirme süreçlerine aktif olarak katıldım. Projelerde veri tabanı işlemleri, ve kullanıcı taleplerine göre esnek çözümler üretme konusunda deneyim kazandım."
  
    },
    {
      id: 2,
      jobTitle: "Teknik Servis Elemanı",
      companyName: "Can Bilgisayar",
      startDate: "Haziran 2019",
      endDate: "Ağustos 2019",
      description:
      "Bilgisayar ve yazılım hatalarını tespit etme, çözme ve sistemlerin düzgün çalışmasını sağlama konusunda deneyim kazandım. Kullanıcıların karşılaştığı donanım ve yazılım problemlerine hızlı çözümler sundum. Ayrıca, cihazların bakımını yaparak performanslarını artırdım ve müşteri memnuniyetini sağlamak için etkili iletişimde bulundum."
    
    }
  ];
  import logo from '../images/logo1.jpg';
  const projects = [
    {
      id: 1,
      title: "Pollster(Anket Sitesi)",
      description: ".NET Core MVC kullanarak geliştirdiğim bu web uygulaması, kayıtlı kullanıcıların anket oluşturmasına, oluşturdukları anketleri yönetmesine ve diğer kullanıcıların bu anketleri cevaplamasına olanak tanır. Uygulama, kullanıcı dostu bir arayüz ile anket oluşturma sürecini kolaylaştırırken, anketlerin gerçek zamanlı olarak takip edilmesini sağlar.",
      image: logo,
      link: "https://github.com/HKeremiri/AnketSitesi"
    },
    {
      id: 2,
      title: "Edish(Edirne Şikayet Hattı)",
      description: " Bu projede, Edirne ilindeki vatandaşların şikayetlerini ve önerilerini paylaşabileceği bir platform geliştirdim. Kullanıcılar, şikayetlerini kategorilere ayırarak paylaşabilir ve diğer kullanıcıların şikayetlerine yorum yapabilir. Ayrıca, Edirne Belediyesi yetkilileri, bu platform üzerinden gelen şikayetleri takip edebilir ve çözüm süreçlerini hızlandırabilir.",
      image: logo2,
      link: "https://github.com/HKeremiri/Edish-Edirne-Sikayet-Hatti-"
    }
    
  ];
  
  import logo2 from '../images/edishlogo.png';
  const school=[
    {
        id: 1,
        title: "Trakya Üniversitesi",
        subtitle: "Yönetim Bilişim Sistemleri",
        startDate: "Ekim 2022",
        endDate: "Şubat 2025(Tahmini)",
        description: "Bilgisayar programcılığından dgs ile geçiş yaparak lisans öğrenimini tamamladım. Bu bölümde, işletmelerin bilgi teknolojileri projelerini yönetme, iş süreçlerini analiz etme ve bilgi sistemlerini geliştirme konularında eğitim aldım. Ayrıca, veri tabanı yönetimi, yazılım geliştirme, veri analizi ve muhasebe gibi konularda bilgi sahibi oluyorum.",
             
      },
      {
        id: 2,
        title: "Beykent Üniversitesi",
        subtitle: "Bilgisayar Programcılığı",
        
        startDate: "Eylül 2016",
        endDate: "Temmuz 2019",
        description: " Bilgisayar Programcılığı bölümünde öğrenciydim. Bu bölümde, temel programlama dilleri, algoritma ve veri yapıları, web programlama ve mobil uygulama geliştirme konularında eğitim aldım. Ayrıca, yazılım test etme, veri tabanı yönetimi gibi konularda bilgi sahibi oldum.",
        
      },
      {
        id: 3,
        title: "Çatalca Arif Nihat Asya Mesleki ve Teknik Anadolu Lisesi",
        subtitle: "Bilişim Teknolojileri",
        startDate: "Eylül 2012",
        endDate: "Haziran 2016",
        description: " Bilişim Teknolojileri alanında eğitim aldığım lisede, temel bilgisayar bilgisi, web tasarımı ve programlama dilleri gibi konularda eğitim aldım. Ayrıca, bilgisayar donanımı ve yazılımı konularında pratik beceriler kazandım.",
      }
  ]

  const pages = [
    { name: 'Okul Hayatı', id: 'schoollife' },
    { name: 'İş Deneyimi', id: 'joblife' },
    { name: 'Projelerim', id: 'myprojects' },
    { name: 'İletişim', id: 'contact' }
  ];
  
    export { content, jobs , projects,school,pages};