const ctx1 = document.getElementById('graphOne');

new Chart(ctx1, {
	type: 'pie',
	data: {
		labels: ['Tidak Tamat SD', 'SD-SMP/Sederajat', 'SMA/Sederajat', 'DI/II/III', 'DIV/S1/S2/S3'],
		datasets: [{
			label: '% Tenaga Kerja',
			data: [13.84, 60.80, 22.86, 0.69, 1.81],
			backgroundColor: ["#FAEDCB", "#F7D9C4", "#F2C6DE", "#DBCDF0", "#C6DEF1","#C9E4DE"],
			borderWidth: 1
		}]
	},
		
	options: {
		responsive: true,
		hoverOffset: 10,
        plugins: {
            title: {
                display: true,
                text: 'Tingkat Pendidikan Pekerja dalam Usaha IMK'
            },
            subtitle: {
                display: true,
                text: 'Sumber: Profil Industri Mikro dan Kecil, 2021',
				position: 'bottom'
            },
			legend: {
				position: 'right'
			}
        }
	}
});

const ctx2 = document.getElementById('graphTwo');

new Chart(ctx2, {
	type: 'bar',
	data: {
		labels: ['Permodalan', 'Pemasaran', 'Bahan Baku', 'Cuaca', 'BBM / Energi', 'Infrastruktur', 'Tenaga Kerja', 'Lainnya'],
		datasets: [{
			label: '% Usaha IMK',
			data: [34.34, 26.09, 16.62, 10.03, 4.13, 3.37, 2.79, 2.62],
			borderWidth: 1
		}]
	},
		
	options: {
		responsive: true,
		scales: {
			y: {
				beginAtZero: true				
			}
		},
		hoverOffset: 10,
        plugins: {
            title: {
                display: true,
                text: 'Jenis Kesulitan yang Dialami Usaha IMK, 2021'
            },
            subtitle: {
                display: true,
                text: 'Sumber: Profil Industri Mikro dan Kecil 2021',
				position: 'bottom'
            }
        }		
	}
});

const ctx3 = document.getElementById('graphThree');

new Chart(ctx3, {
	type: 'bar',
	data: {
		labels: ["2017", "2018", "2019", "2020", "2021"],
		datasets: [{ 
			data: [427.687, 519.297, 506.636, 483.966, 523.476],
			label: "Industri Besar",
			borderColor: "#FFFFFF",
			backgroundColor: "#333366",
			borderWidth:1
		}, { 
			data: [515.674, 429.496, 515.078, 494.781, 515.675],
			label: "Industri Menengah",
			borderColor: "#FFFFFF",
			backgroundColor:"#FFCC66",
			borderWidth:1
		}]
	},
		
	options: {
		responsive: true,
		scales: {
			y: {
				beginAtZero: true,
				title: {
					display: true,
					text: 'Nilai Produktivitas (Juta Rp.)'
				}
			}
		},
		hoverOffset: 10,
        plugins: {
            title: {
                display: true,
                text: 'Produktivitas Tenaga Kerja Industri Besar dan Menengah'
            },
            subtitle: {
                display: true,
                text: 'Sumber: Indikator Industri Manifaktur Indonesia, 2021',
				position: 'bottom'
            },
			legend: {
				position: 'bottom'
			}
        }
	}
});

const ctx4 = document.getElementById('graphFour');

new Chart(ctx4, {
	type: 'pie',
	data: {
		labels: ['Low Technology', 'Medium-Low Technology', 'Medium-High Technology', 'High Technology'],
		datasets: [{
			label: '% Perusahaan',
			data: [62, 23, 13, 2],
			backgroundColor: ["#FAEDCB", "#F7D9C4", "#F2C6DE", "#DBCDF0", "#C6DEF1","#C9E4DE"],
			borderWidth: 1
		}]
	},
		
	options: {
		responsive: true,
		hoverOffset: 10,
        plugins: {
            title: {
                display: true,
                text: 'Persentase Jumlah Perusahaan Industri Menengah Menurut Klasifikasi Intensitas Teknologi'
            },
            subtitle: {
                display: true,
                text: 'Sumber: Statistik Industri Manufaktur Indonesia, 2021 dan Eurostat indicators on High-tech industry and Knowledge',
				position: 'bottom'
            },
			legend: {
				position: 'right',
				labels: {
					font: {
						style: 'italic'
					}
				}
			}
        }
	}
});

const ctx5 = document.getElementById('graphFive');

new Chart(ctx5, {
	type: 'bar',
	data: {
		labels: ["Low Technology", "Medium-Low Technology", "Medium-High Technology", "High Technology"],
		datasets: [{ 
			data: [3, 5, 10, 13],
			label: "Nilai Produktivitas",
			borderColor: "#FFFFFF",
			backgroundColor: "#333366",
			borderWidth:1
		}, { 
			data: [159.053, 98.226, 121.352, 18.342],
			label: "Nilai Tambah",
			borderColor: "#FFFFFF",
			backgroundColor:"#FFCC66",
			borderWidth:1
		}]
	},
		
	options: {
		indexAxis: 'y',
		responsive: true,
		scales: {
			y: {
				beginAtZero: true
			}
		},
		hoverOffset: 10,
        plugins: {
            title: {
                display: true,
                text: 'Produktivitas dan Nilai Tambah (dalam Miliar Rp)'
            },
            subtitle: {
                display: true,
                text: 'Sumber: Statistik Industri Manufaktur Indonesia, 2021',
				position: 'bottom'
            },
			legend: {
				position: 'bottom'
			}
        }		
	}
});