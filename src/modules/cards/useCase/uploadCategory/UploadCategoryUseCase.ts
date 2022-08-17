import fs from "fs";
import { parse } from "csv-parse";
import { ICategoriesRepository } from "../../repository/implementations/ICategoriesRepository";

interface IIportFile {
  name: string;
  description: string;
}

class UploadCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }

  uploadFiles(file: Express.Multer.File): Promise<IIportFile[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);

      const categories: IIportFile[] = [];

      const parseFile = parse();

      stream.pipe(parseFile);

      parseFile
        .on("data", (line) => {
          const [name, description] = line;

          categories.push({
            name,
            description,
          });
        })
        .on("end", () => {
          fs.promises.unlink(file.path)
          resolve(categories);
        })
        .on("error", (err) => {
          reject(err);
        });
    });
  }
  async execute(file: Express.Multer.File) {
    const categories = await this.uploadFiles(file);

    categories.forEach((category)=>{
      const {name, description} = category
     
      const existCategory = this.categoriesRepository.findByname(name)

      if(!existCategory){
        this.categoriesRepository.created({ name, description });
      }
    

    })
    
    
  }
}
export { UploadCategoryUseCase };
