brew install bazelisk
brew install llvm
export PATH="$(brew --prefix llvm)/bin:${PATH}"

# /Developer

git clone https://github.com/carbon-language/carbon-lang
cd carbon-lang
bazel run //explorer -- ./explorer/testdata/print/format_only.carbon

# Folder
