export const slides = [
  {
    id: 1,
    type: 'intro',
    title: 'GIAI CẤP VÀ ĐẤU TRANH GIAI CẤP',
    content: {
      subtitle: 'Chương 3: Chủ nghĩa duy vật lịch sử - Phần II',
      description: 'Lý luận về giai cấp và đấu tranh giai cấp theo quan điểm triết học Mác-Lênin',
      quote: '"Lịch sử tất cả các xã hội cho đến ngày nay chỉ là lịch sử đấu tranh giai cấp" - K.Marx & F.Engels',
      author: 'Nhóm 6',
      objectives: [
        'Hiểu khái niệm giai cấp theo V.I.Lênin',
        'Nắm được nguồn gốc và nguyên nhân phân chia giai cấp',
        'Phân tích vai trò của đấu tranh giai cấp',
        'Vận dụng vào thực tiễn Việt Nam hiện nay'
      ]
    },
    background: 'linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%)',
    image: '/images/marx-engels-lenin.jpg'
  },
  {
    id: 2,
    type: 'text',
    title: 'Khái niệm Giai cấp theo V.I.Lênin',
    content: {
      definition: 'Theo V.I.Lênin: "Được gọi là giai cấp, là những tập đoàn người to lớn, khác nhau về:',
      points: [
        '🏭 Địa vị trong một hệ thống sản xuất xã hội nhất định trong lịch sử',
        '🔧 Quan hệ với những tư liệu sản xuất (được pháp luật quy định và thừa nhận)', 
        '👥 Vai trò trong tổ chức lao động xã hội',
        '💰 Cách thức hưởng thụ phần của cải xã hội ít hay nhiều mà họ được hưởng'
      ],
      note: 'Giai cấp là những tập đoàn người, mà một tập đoàn có thể chiếm đoạt lao động của các tập đoàn khác, do địa vị khác nhau của họ trong một chế độ kinh tế xã hội nhất định.',
      examples: [
        'Xã hội chiếm hữu nô lệ: Chủ nô - Nô lệ',
        'Xã hội phong kiến: Địa chủ - Nông dân',
        'Xã hội tư bản chủ nghĩa: Tư sản - Vô sản'
      ]
    },
    image: '/images/class-structure.jpg'
  },
  {
    id: 3,
    type: 'analysis-detailed',
    title: 'Kết cấu xã hội - giai cấp',
    content: {
      categories: [
        {
          icon: '⭐',
          title: 'Giai cấp cơ bản',
          color: '#e74c3c',
          points: [
            'Gắn với phương thức sản xuất thống trị',
            'Là sản phẩm của PTSX thống trị nhất định',
            'VD: Chủ nô-Nô lệ, Địa chủ-Nông dân, Tư sản-Vô sản'
          ]
        },
        {
          icon: '🔄',
          title: 'Giai cấp không cơ bản',
          color: '#3498db',
          points: [
            'Gắn với PTSX tàn dư hoặc mầm mống',
            'PTSX tàn dư: sẽ tàn lụi dần',
            'PTSX mầm mống: phát triển thành giai cấp cơ bản mới'
          ]
        },
        {
          icon: '👨‍🎓',
          title: 'Tầng lớp xã hội',
          color: '#9b59b6',
          points: [
            'Không có địa vị kinh tế độc lập',
            'VD: Tầng lớp trí thức, nhân sĩ, giới tu hành',
            'Có vai trò quan trọng trong phát triển xã hội'
          ]
        }
      ]
    },
    image: '/images/social-structure.jpg'
  },
  {
    id: 4,
    type: 'analysis-detailed',
    title: 'Nguồn gốc và nguyên nhân phân chia giai cấp',
    content: {
      categories: [
        {
          icon: '⚡',
          title: 'Nguồn gốc sâu xa',
          color: '#e74c3c',
          points: [
            'Sự phát triển của lực lượng sản xuất → năng suất lao động tăng',
            'Xuất hiện "của dư" trong xã hội cộng sản nguyên thủy',
            'Phân công lao động xã hội phát triển → trao đổi sản phẩm'
          ]
        },
        {
          icon: '🏛️',
          title: 'Nguyên nhân trực tiếp',
          color: '#3498db',
          points: [
            'Chế độ tư hữu về tư liệu sản xuất thay thế công hữu nguyên thủy',
            'Sự phân hóa tài sản trong cộng đồng',
            'Những người có chức quyền chiếm đoạt tài sản công làm của riêng'
          ]
        },
        {
          icon: '📚',
          title: 'Điều kiện góp phần',
          color: '#9b59b6',
          points: [
            'Các cuộc chiến tranh và những thủ đoạn cướp bóc',
            'Hành vi bạo lực trong xã hội',
            'Quá trình từ xã hội cộng sản nguyên thủy → xã hội chiếm hữu nô lệ (3-5 nghìn năm trước)'
          ]
        }
      ]
    },
    image: '/images/class-origin.jpg'
  },
  {
    id: 5,
    type: 'concept',
    title: 'Đấu tranh giai cấp - Động lực phát triển',
    content: {
      definition: 'Đấu tranh giai cấp là cuộc đấu tranh của quần chúng lao động bị áp bức, bóc lột chống lại giai cấp áp bức, bóc lột nhằm lật đổ ách thống trị của chúng.',
      characteristics: [
        {
          title: 'Tính tất yếu',
          description: 'Do sự đối lập về lợi ích căn bản không thể điều hòa được giữa các giai cấp'
        },
        {
          title: 'Động lực trực tiếp', 
          description: 'Thúc đẩy sự phát triển của xã hội, phá bỏ quan hệ sản xuất cũ, xây dựng quan hệ mới'
        },
        {
          title: 'Thực chất',
          description: 'Quần chúng lao động chống áp bức, bóc lột để giải phóng lực lượng sản xuất'
        }
      ],
      quote: '"Lịch sử tất cả các xã hội cho đến ngày nay chỉ là lịch sử đấu tranh giai cấp" - K.Marx & F.Engels',
      image: '/images/class-struggle.jpg'
    }
  },
  {
    id: 6,
    type: 'analysis-detailed',
    title: 'Ba hình thức đấu tranh giai cấp của giai cấp vô sản',
    content: {
      categories: [
        {
          icon: '💰',
          title: 'Đấu tranh kinh tế',
          color: '#e74c3c',
          points: [
            'Bảo vệ lợi ích hàng ngày: tăng lương, rút ngắn giờ làm, cải thiện điều kiện sống',
            'Hạn chế sự bóc lột của giai cấp tư sản',
            'Tập hợp lực lượng, giác ngộ quần chúng lao động'
          ]
        },
        {
          icon: '🏛️',
          title: 'Đấu tranh chính trị',
          color: '#3498db',
          points: [
            'Mục tiêu: đánh đổ ách thống trị của giai cấp tư sản, giành chính quyền',
            'Hình thức: tham gia nghị viện, mít tinh, biểu tình, bãi công chính trị',
            'Cao nhất: sử dụng bạo lực cách mạng để đập tan nhà nước tư sản'
          ]
        },
        {
          icon: '💭',
          title: 'Đấu tranh tư tưởng',
          color: '#9b59b6',
          points: [
            'Đập tan hệ tư tưởng của giai cấp tư sản',
            'Vũ trang cho giai cấp công nhân hệ tư tưởng Mác-Lênin',
            'Đấu tranh chống các trào lưu tư tưởng lệch lạc, hữu khuynh, tả khuynh'
          ]
        }
      ]
    },
    image: '/images/three-forms-struggle.jpg'
  },
  {
    id: 7,
    type: 'application',
    title: 'Đấu tranh giai cấp ở Việt Nam hiện nay',
    content: {
      examples: [
        {
          period: 'Thời kỳ quá độ lên CNXH',
          description: 'Đấu tranh xây dựng thành công chủ nghĩa xã hội, bảo vệ Tổ quốc',
          result: 'Hai nhiệm vụ chiến lược: xây dựng CNXH và bảo vệ Tổ quốc XHCN'
        },
        {
          period: 'Đặc điểm hiện nay',
          description: 'Đấu tranh chống "diễn biến hòa bình", bảo vệ chế độ XHCN',
          result: 'Giữ vững định hướng xã hội chủ nghĩa trong kinh tế thị trường'
        },
        {
          period: 'Nội dung cụ thể',
          description: 'Công nghiệp hóa, hiện đại hóa theo định hướng XHCN',
          result: 'Xây dựng xã hội dân giàu, nước mạnh, dân chủ, công bằng, văn minh'
        }
      ],
      modernRelevance: 'Đấu tranh giai cấp ở VN diễn ra phức tạp, đòi hỏi sử dụng nhiều hình thức đa dạng: hành chính, giáo dục, kinh tế, mở cửa hội nhập...'
    },
    image: '/images/vietnam-development.jpg'
  },
  {
    id: 8,
    type: 'audio-intro',
    title: 'Vận dụng lý thuyết: Phân tích bài hát "Lối nhỏ"',
    content: {
      description: 'Sau khi tìm hiểu lý thuyết, chúng ta sẽ vận dụng để phân tích hiện tượng xã hội qua bài hát của Đen Vâu:',
      lyrics: [
        '"Em vào đời bằng đại lộ còn anh vào đời bằng lối nhỏ"',
        '"Em vào đời từ cao tầng còn anh vào đời từ mái lá"',
        '"Vài người thường ăn hải sản rồi lại chê bai mùi cá ao"'
      ],
      instruction: 'Hãy lắng nghe và suy ngẫm về sự phân chia giai cấp trong xã hội hiện đại',
      question: 'Điều gì đã quy định sự khác biệt này? Nguyên nhân là gì?'
    },
    image: '/images/den-vau-loi-nho.jpg'
  },
  {
    id: 9,
    type: 'quote-analysis',
    title: 'Phân tích: Xuất phát điểm khác nhau',
    content: {
      quote: '"Em vào đời từ cao tầng còn anh vào đời từ mái lá"',
      analysis: [
        {
          term: '🏢 "Cao tầng"',
          explanation: 'Biểu trưng cho giai cấp có điều kiện kinh tế khá giả, tiếp cận dễ dàng các cơ hội giáo dục, y tế, việc làm tốt',
          example: 'Con em các gia đình giàu có, doanh nhân, trí thức'
        },
        {
          term: '🏚️ "Mái lá"', 
          explanation: 'Biểu trưng cho giai cấp lao động, điều kiện sống khó khăn, hạn chế về cơ hội phát triển',
          example: 'Con em nông dân, công nhân, người lao động phổ thông'
        }
      ],
      conclusion: 'Thể hiện sự thừa kế địa vị xã hội từ gia đình - yếu tố quyết định xuất phát điểm của mỗi người.'
    }
  },
  {
    id: 10,
    type: 'quote-analysis',
    title: 'Phân tích: Bất bình đẳng cơ hội',
    content: {
      quote: '"Em vào đời bằng đại lộ còn anh vào đời bằng lối nhỏ"',
      analysis: [
        {
          term: '🛣️ "Đại lộ"',
          explanation: 'Con đường rộng mở, nhiều cơ hội phát triển, ít rào cản xã hội',
          example: 'Học trường tốt, có mối quan hệ, dễ tìm việc'
        },
        {
          term: '🛤️ "Lối nhỏ"',
          explanation: 'Con đường hẹp, ít cơ hội, nhiều khó khăn và thử thách',
          example: 'Học trường nghèo, tự lập từ sớm, khó khăn tìm việc'
        }
      ],
      conclusion: 'Phản ánh bất bình đẳng về cơ hội giáo dục, việc làm và phát triển cá nhân do xuất thân giai cấp.'
    }
  },
  {
    id: 11,
    type: 'quote-analysis', 
    title: 'Phân tích: Mâu thuẫn và xa cách giai cấp',
    content: {
      quote: '"Vài người thường ăn hải sản rồi lại chê bai mùi cá ao"',
      analysis: [
        {
          term: '🦞 "Ăn hải sản"',
          explanation: 'Lối sống sang trọng, xa xỉ của tầng lớp có điều kiện kinh tế',
          example: 'Ăn uống đắt tiền, tiêu dùng cao cấp'
        },
        {
          term: '🐟 "Chê bai mùi cá ao"',
          explanation: 'Thái độ khinh thường, xa cách với cuộc sống giản dị của người lao động',
          example: 'Coi thường văn hóa dân gian, lối sống bình dân'
        }
      ],
      conclusion: 'Thể hiện mâu thuẫn lợi ích và sự xa cách về tâm lý, văn hóa giữa các giai cấp khác nhau.'
    }
  },
  {
    id: 7,
    type: 'analysis-detailed',
    title: 'Nguồn gốc và nguyên nhân phân chia giai cấp',
    content: {
      categories: [
        {
          icon: '⚡',
          title: 'Nguồn gốc sâu xa',
          color: '#e74c3c',
          points: [
            'Sự phát triển của lực lượng sản xuất → năng suất lao động tăng',
            'Xuất hiện "của dư" trong xã hội cộng sản nguyên thủy',
            'Phân công lao động xã hội phát triển → trao đổi sản phẩm'
          ]
        },
        {
          icon: '🏛️',
          title: 'Nguyên nhân trực tiếp',
          color: '#3498db',
          points: [
            'Chế độ tư hữu về tư liệu sản xuất thay thế công hữu nguyên thủy',
            'Sự phân hóa tài sản trong cộng đồng',
            'Những người có chức quyền chiếm đoạt tài sản công làm của riêng'
          ]
        },
        {
          icon: '📚',
          title: 'Điều kiện góp phần',
          color: '#9b59b6',
          points: [
            'Các cuộc chiến tranh và những thủ đoạn cướp bóc',
            'Hành vi bạo lực trong xã hội',
            'Quá trình từ xã hội cộng sản nguyên thủy → xã hội chiếm hữu nô lệ (3-5 nghìn năm trước)'
          ]
        }
      ]
    }
  },
  {
    id: 8,
    type: 'concept',
    title: 'Đấu tranh giai cấp - Động lực phát triển',
    content: {
      definition: 'Đấu tranh giai cấp là cuộc đấu tranh của quần chúng lao động bị áp bức, bóc lột chống lại giai cấp áp bức, bóc lột nhằm lật đổ ách thống trị của chúng.',
      characteristics: [
        {
          title: 'Tính tất yếu',
          description: 'Do sự đối lập về lợi ích căn bản không thể điều hòa được giữa các giai cấp'
        },
        {
          title: 'Động lực trực tiếp', 
          description: 'Thúc đẩy sự phát triển của xã hội, phá bỏ quan hệ sản xuất cũ, xây dựng quan hệ mới'
        },
        {
          title: 'Ba hình thức cơ bản',
          description: 'Đấu tranh kinh tế, đấu tranh chính trị, đấu tranh tư tưởng (khi chưa có chính quyền)'
        }
      ],
      quote: '"Lịch sử tất cả các xã hội cho đến ngày nay chỉ là lịch sử đấu tranh giai cấp" - K.Marx & F.Engels'
    }
  },
  {
    id: 9,
    type: 'analysis-detailed',
    title: 'Ba hình thức đấu tranh giai cấp của giai cấp vô sản',
    content: {
      categories: [
        {
          icon: '💰',
          title: 'Đấu tranh kinh tế',
          color: '#e74c3c',
          points: [
            'Bảo vệ lợi ích hàng ngày: tăng lương, rút ngắn giờ làm, cải thiện điều kiện sống',
            'Hạn chế sự bóc lột của giai cấp tư sản',
            'Tập hợp lực lượng, giác ngộ quần chúng lao động'
          ]
        },
        {
          icon: '🏛️',
          title: 'Đấu tranh chính trị',
          color: '#3498db',
          points: [
            'Mục tiêu: đánh đổ ách thống trị của giai cấp tư sản, giành chính quyền',
            'Hình thức: tham gia nghị viện, mít tinh, biểu tình, bãi công chính trị',
            'Cao nhất: sử dụng bạo lực cách mạng để đập tan nhà nước tư sản'
          ]
        },
        {
          icon: '💭',
          title: 'Đấu tranh tư tưởng',
          color: '#9b59b6',
          points: [
            'Đập tan hệ tư tưởng của giai cấp tư sản',
            'Vũ trang cho giai cấp công nhân hệ tư tưởng Mác-Lênin',
            'Đấu tranh chống các trào lưu tư tưởng lệch lạc, hữu khuynh, tả khuynh'
          ]
        }
      ]
    }
  },
  {
    id: 10,
    type: 'application',
    title: 'Đấu tranh giai cấp ở Việt Nam hiện nay',
    content: {
      examples: [
        {
          period: 'Thời kỳ quá độ lên CNXH',
          description: 'Đấu tranh xây dựng thành công chủ nghĩa xã hội, bảo vệ Tổ quốc',
          result: 'Hai nhiệm vụ chiến lược: xây dựng CNXH và bảo vệ Tổ quốc XHCN'
        },
        {
          period: 'Đặc điểm hiện nay',
          description: 'Đấu tranh chống "diễn biến hòa bình", bảo vệ chế độ XHCN',
          result: 'Giữ vững định hướng xã hội chủ nghĩa trong kinh tế thị trường'
        },
        {
          period: 'Nội dung cụ thể',
          description: 'Công nghiệp hóa, hiện đại hóa theo định hướng XHCN',
          result: 'Xây dựng xã hội dân giàu, nước mạnh, dân chủ, công bằng, văn minh'
        }
      ],
      modernRelevance: 'Đấu tranh giai cấp ở VN diễn ra phức tạp, đòi hỏi sử dụng nhiều hình thức đa dạng: hành chính, giáo dục, kinh tế, mở cửa hội nhập...'
    }
  },
  {
    id: 12,
    type: 'conclusion',
    title: 'Kết luận về lý thuyết giai cấp và đấu tranh giai cấp',
    content: {
      mainPoints: [
        '📚 Lý thuyết Mác-Lênin về giai cấp giúp hiểu bản chất sự phân chia xã hội',
        '⚡ Nguồn gốc giai cấp: phát triển lực lượng sản xuất → chế độ tư hữu',
        '🔄 Đấu tranh giai cấp là động lực trực tiếp phát triển xã hội',
        '🇻🇳 Việt Nam đang đấu tranh xây dựng xã hội công bằng, giảm bất bình đẳng'
      ],
      quote: '"Đấu tranh giai cấp tất yếu dẫn đến chuyên chính vô sản, bản thân nền chuyên chính này chỉ là bước quá độ tiến tới thủ tiêu mọi giai cấp và tiến tới xã hội không giai cấp" - K.Marx',
      summary: 'Lý thuyết về giai cấp và đấu tranh giai cấp là nền tảng khoa học để hiểu và thay đổi xã hội theo hướng công bằng, tiến bộ.'
    },
    image: '/images/vietnam-development.jpg'
  },
  {
    id: 13,
    type: 'conclusion',
    title: 'Trả lời câu hỏi: Phân tích bài hát "Lối nhỏ"',
    content: {
      question: 'Điều gì quy định sự khác biệt trong xã hội? Nguyên nhân là gì?',
      answers: [
        {
          title: '🎯 Điều gì quy định sự khác biệt?',
          content: 'Sự phân chia giai cấp dựa trên: địa vị trong hệ thống sản xuất, quan hệ với tư liệu sản xuất, vai trò trong tổ chức lao động, cách thức hưởng thụ của cải xã hội'
        },
        {
          title: '⚡ Nguyên nhân sâu xa:',
          content: 'Sự phát triển lực lượng sản xuất → xuất hiện "của dư" → chế độ tư hữu về tư liệu sản xuất thay thế công hữu nguyên thủy'
        },
        {
          title: '🔥 Biểu hiện trong "Lối nhỏ":',
          content: 'Sự thừa kế địa vị xã hội ("cao tầng" vs "mái lá"), bất bình đẳng cơ hội ("đại lộ" vs "lối nhỏ"), mâu thuẫn giai cấp ("hải sản" vs "cá ao")'
        }
      ],
      conclusion: '🎵 Bài hát "Lối nhỏ" phản ánh sinh động thực trạng phân hóa giai cấp trong xã hội hiện đại, cho thấy sự bất bình đẳng về cơ hội và điều kiện sống.',
      callToAction: 'Mỗi chúng ta hãy góp phần xây dựng xã hội bình đẳng cơ hội!',
      thanks: 'Cảm ơn các bạn đã lắng nghe!'
    },
    image: '/images/den-vau-loi-nho.jpg'
  }
];

export default slides;
