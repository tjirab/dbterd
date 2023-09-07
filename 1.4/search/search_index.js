var __index = {"config":{"lang":["en"],"separator":"[\\s\\-,:!=\\[\\]()\"`/]+|\\.(?!\\d)|&[lg]t;|(?!\\b)(?=[A-Z][a-z])","pipeline":["stopWordFilter"]},"docs":[{"location":"index.html","title":"dbterd","text":"<p>CLI to generate Diagram-as-a-code file (DBML, Mermaid, PlantUML, GraphViz, D2) from dbt artifact files (required:  )</p> <p> </p> pip install dbterd --upgrade Successfully installed dbterd restart \u21bb <p>Verify installation:</p> <pre><code>dbterd --version\n</code></pre>"},{"location":"index.html#quick-examine-with-existing-samples","title":"Quick examine with existing samples","text":"Click me <pre><code># select all models in dbt_resto\ndbterd run -ad samples/dbtresto\n# select all models in dbt_resto, Select multiple dbt resources\ndbterd run -ad samples/dbtresto -rt model -rt source\n# select only models in dbt_resto excluding staging\ndbterd run -ad samples/dbtresto -s model.dbt_resto -ns model.dbt_resto.staging\n# select only models in schema name mart excluding staging\ndbterd run -ad samples/dbtresto -s schema:mart -ns model.dbt_resto.staging\n# select only models in schema full name dbt.mart excluding staging\ndbterd run -ad samples/dbtresto -s schema:dbt.mart -ns model.dbt_resto.staging\n\n# other samples\ndbterd run -ad samples/fivetranlog\ndbterd run -ad samples/fivetranlog -rt model -rt source\ndbterd run -ad samples/facebookad\ndbterd run -ad samples/facebookad -rt model -rt source\ndbterd run -ad samples/shopify -s wildcard:*shopify.shopify__*\ndbterd run -ad samples/shopify -rt model -rt source\ndbterd run -ad samples/dbt-constraints -a \"test_relationship:(name:foreign_key|c_from:fk_column_name|c_to:pk_column_name)\"\n# your own sample without commiting to repo\ndbterd run -ad samples/local -rt model -rt source\n</code></pre>"},{"location":"index.html#quick-demo","title":"Quick DEMO","text":"<p>Check Quick Demo out! And, following is the sample result using <code>dbdocs</code>:</p> <p></p>"},{"location":"index.html#contributing","title":"Contributing \u2728","text":"<p>If you've ever wanted to contribute to this tool, and a great cause, now is your chance!</p> <p>See the contributing docs CONTRIBUTING for more information.</p> <p>Finally, super thanks to our Contributors:</p> <p> </p>"},{"location":"license.html","title":"License","text":"<p>MIT License</p> <p>Copyright \u00a9 2022 Dat Nguyen</p> <p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p> <p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p> <p>THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>"},{"location":"nav/development/CHANGELOG.html","title":"Change Log","text":"<p>Check the Github Releases out!</p>"},{"location":"nav/development/contributing-guide.html","title":"Contributing to <code>dbterd</code>","text":"<p><code>dbterd</code> is open source software. It is what it is today because community members have opened issues, provided feedback, and contributed to the knowledge loop. Whether you are a seasoned open source contributor or a first-time committer, we welcome and encourage you to contribute code, documentation, ideas, or problem statements to this project.</p> <ol> <li>About this document</li> <li>Getting the code</li> <li>Setting up an environment</li> <li>Testing dbterd</li> <li>Submitting a Pull Request</li> </ol>"},{"location":"nav/development/contributing-guide.html#about-this-document","title":"About this document","text":"<p>There are many ways to contribute to the ongoing development of <code>dbterd</code>, such as by participating in discussions and issues. We encourage you to first read our higher-level document: \"Expectations for Open Source Contributors\".</p> <p>The rest of this document serves as a more granular guide for contributing code changes to <code>dbterd</code> (this repository). It is not intended as a guide for using <code>dbterd</code>, and some pieces assume a level of familiarity with Python development with <code>poetry</code>. Specific code snippets in this guide assume you are using macOS or Linux and are comfortable with the command line.</p> <ul> <li>Branches: All pull requests from community contributors should target the <code>main</code> branch (default). If the change is needed as a patch for a minor version of dbt that has already been released (or is already a release candidate), a maintainer will backport the changes in your PR to the relevant \"latest\" release branch (<code>1.0.&lt;latest&gt;</code>, <code>1.1.&lt;latest&gt;</code>, ...). If an issue fix applies to a release branch, that fix should be first committed to the development branch and then to the release branch (rarely release-branch fixes may not apply to <code>main</code>).</li> <li>Releases: Before releasing a new minor version, we prepare a series of beta release candidates to allow users to test the new version in live environments. This is an important quality assurance step, as it exposes the new code to a wide variety of complicated deployments and can surface bugs before official release. Releases are accessible via pip.</li> </ul>"},{"location":"nav/development/contributing-guide.html#getting-the-code","title":"Getting the code","text":""},{"location":"nav/development/contributing-guide.html#installing-git","title":"Installing git","text":"<p>You will need <code>git</code> in order to download and modify the <code>dbterd</code> source code. On macOS, the best way to download git is to just install Xcode.</p>"},{"location":"nav/development/contributing-guide.html#external-contributors","title":"External contributors","text":"<p>You can contribute to <code>dbterd</code> by forking the <code>dbterd</code> repository. For a detailed overview on forking, check out the GitHub docs on forking. In short, you will need to:</p> <ol> <li>Fork the <code>dbterd</code> repository</li> <li>Clone your fork locally</li> <li>Check out a new branch for your proposed changes</li> <li>Push changes to your fork</li> <li>Open a pull request against <code>datnguye/dbterd</code> from your forked repository</li> </ol>"},{"location":"nav/development/contributing-guide.html#setting-up-an-environment","title":"Setting up an environment","text":"<p>There are some tools that will be helpful to you in developing locally. While this is the list relevant for <code>dbterd</code> development, many of these tools are used commonly across open-source python projects.</p>"},{"location":"nav/development/contributing-guide.html#tools","title":"Tools","text":"<p>We will buy <code>poetry</code> in <code>dbterd</code> development and testing.</p> <p>So first install poetry via pip: <pre><code>python3 -m pip install poetry --upgrade\n</code></pre></p> <p>then, start installing the local environment: <pre><code>python3 -m poetry install\npython3 -m poetry shell\npoe git-hooks\npip install -e .\ndbterd -h\n</code></pre></p>"},{"location":"nav/development/contributing-guide.html#testing","title":"Testing","text":"<p>Once you're able to manually test that your code change is working as expected, it's important to run existing automated tests, as well as adding some new ones. These tests will ensure that: - Your code changes do not unexpectedly break other established functionality - Your code changes can handle all known edge cases - The functionality you're adding will keep working in the future</p>"},{"location":"nav/development/contributing-guide.html#pytest","title":"<code>pytest</code>","text":"<p>Finally, you can also run a specific test or group of tests using <code>pytest</code> directly. With a virtualenv active and dev dependencies installed you can do things like:</p> <pre><code>poe test\n</code></pre> <p>Run test with coverage report: <pre><code>poe test-cov\n</code></pre></p> <p>See pytest usage docs for an overview of useful command-line options.</p>"},{"location":"nav/development/contributing-guide.html#submitting-a-pull-request","title":"Submitting a Pull Request","text":"<p>Code can be merged into the current development branch <code>main</code> by opening a pull request. A <code>dbterd</code> maintainer will review your PR. They may suggest code revision for style or clarity, or request that you add unit or integration test(s). These are good things! We believe that, with a little bit of help, anyone can contribute high-quality code.</p> <p>Automated tests run via GitHub Actions. If you're a first-time contributor, all tests (including code checks and unit tests) will require a maintainer to approve. Changes in the <code>dbterd</code> repository trigger integration tests against Postgres. dbt Labs also provides CI environments in which to test changes to other adapters, triggered by PRs in those adapters' repositories, as well as periodic maintenance checks of each adapter in concert with the latest <code>dbterd</code> code changes.</p> <p>Once all tests are passing and your PR has been approved, a <code>dbterd</code> maintainer will merge your changes into the active development branch. And that's it! Happy developing </p>"},{"location":"nav/guide/cli-references.html","title":"CLI Reference (dbterd)","text":"<p>Run <code>dbterd --help</code> or <code>dbterd -h</code> to see the basic guideline for CLI Reference</p> dbterd -h Usage: dbterd [OPTIONS] COMMAND [ARGS]...  Tools for producing diagram-as-code  Options: --version   Show the version and exit. -h, --help  Show this message and exit.  Commands: debug  Inspect the hidden magics run    Run the convert"},{"location":"nav/guide/cli-references.html#run","title":"run","text":"<p>Command to generate diagram-as-a-code file</p> <p>Examples:</p> CLI (within dbt project)--help (-h) <pre><code>dbt docs generate\ndbterd run [-t dbml or -t mermaid]\n</code></pre> <pre><code>Usage: dbterd run [OPTIONS]\n\nRun the convert\n\nOptions:\n    -ad, --artifacts-dir TEXT     Specified the full path to dbt artifacts path\n                                    which known as /target directory  [default:\n                                    C:\\Users\\DAT\\Documents\\Sources\\dbterd\\target]\n    -o, --output TEXT             Output the result file. Default to the same\n                                    target dir  [default:\n                                    C:\\Users\\DAT\\Documents\\Sources\\dbterd\\target]\n    -s, --select TEXT             Selecttion criteria\n    -ns, --exclude TEXT           Exclusion criteria\n    -t, --target TEXT             Target to the diagram-as-code platform\n                                    [default: dbml]\n    -a, --algo TEXT               Specified algorithm in the way to detect\n                                    diagram connectors  [default:\n                                    test_relationship]\n    -mv, --manifest-version TEXT  Specified dbt manifest.json version\n    -cv, --catalog-version TEXT   Specified dbt catalog.json version\n    -rt, --resource-type TEXT     Specified dbt resource type(seed, model,\n                                    source, snapshot),default:model, use examples,\n                                    -rt model -rt source\n    -h, --help                    Show this message and exit.\n</code></pre>"},{"location":"nav/guide/cli-references.html#-artifacts-dir-ad","title":"--artifacts-dir (-ad)","text":"<p>Configure the path to directory containing dbt artifact files.</p> <p>Default to <code>./target</code></p> <p>Examples:</p> CLICLI (long style) <pre><code>dbterd run -ad \"./target\"\n</code></pre> <pre><code>dbterd run --artifacts-dir \"./target\"\n</code></pre>"},{"location":"nav/guide/cli-references.html#-output-o","title":"--output (-o)","text":"<p>Configure the path to directory containing the output diagram file.</p> <p>Default to <code>./target</code></p> <p>Examples:</p> CLICLI (long style) <pre><code>dbterd run -o \"./target\"\n</code></pre> <pre><code>dbterd run --output \"./target\"\n</code></pre>"},{"location":"nav/guide/cli-references.html#-select-s","title":"--select (-s)","text":"<p>Selection criteria.</p> <p>Select all dbt models if not specified, supports mulitple options</p> <p>Rules:</p> <ul> <li>By <code>name</code>: model name starts with input string</li> <li>By <code>schema</code>: schema name starts with an input string, formed as <code>schema:&lt;your_schema_name&gt;</code></li> <li>By <code>wildcard</code>: model name matches to a wildcard pattern, formed as <code>wildcard:&lt;your_wildcard&gt;</code></li> <li>By <code>exposure</code>: exposure name, exact match</li> </ul> <p>Examples:</p> CLI (by name)CLI (by schema)CLI (by wildcard)CLI (by exposure) <pre><code>dbterd run -s \"model.package_name.model_partital_name\"\n</code></pre> <pre><code>dbterd run -s \"schema:my_schema_name\"\n</code></pre> <pre><code>dbterd run --select \"wildcard:*xyz\"\n</code></pre> <pre><code>dbterd run --select \"exposure:my_exposure_name\"\n</code></pre>"},{"location":"nav/guide/cli-references.html#and-and-or-logic","title":"<code>AND</code> and <code>OR</code> logic","text":"<ul> <li><code>AND</code> logic is applied to a single selection splitted by comma (,)</li> <li><code>OR</code> logic is applied to 2+ selection</li> </ul> <p>Examples:</p> ANDOR <pre><code># All models belong to 'abc' schema AND also need to match the pattern of '*xyz.*'\ndbterd run -s schema:abc,wildcard:*xyz.*\n</code></pre> <pre><code># All models belong to 'abc' schema, OR match to the pattern of '*xyz.*'\ndbterd run -s schema:abc -s wildcard:*xyz.*\n</code></pre>"},{"location":"nav/guide/cli-references.html#-exclude-ns","title":"--exclude (-ns)","text":"<p>Exclusion criteria. Rules are the same as Selection Criteria.</p> <p>Do not exclude any dbt models if not specified, supports mulitple options</p> <p>Examples:</p> CLICLI (long style) <pre><code>dbterd run -ns 'model.package_name.table'\n</code></pre> <pre><code>dbterd run --exclude 'model.package_name.table'\n</code></pre>"},{"location":"nav/guide/cli-references.html#-target-t","title":"--target (-t)","text":"<p>Target to the diagram-as-code platform</p> <p>Default to <code>dbml</code></p> <p>Supported target, please visit Generate the Targets</p> <p>Examples:</p> CLICLI (long style) <pre><code>dbterd run -t dbml\n</code></pre> <pre><code>dbterd run --target dbml\n</code></pre>"},{"location":"nav/guide/cli-references.html#-algo-a","title":"--algo (-a)","text":"<p>Specified algorithm in the way to detect diagram connectors</p> <p>Default to <code>test_relationship</code></p> <p>In the advanced use case, the test name can be configurable by following syntax:</p> <p><code>{algorithm_name}:(name:{contains_test_name}|c_from:{referencing_column_name}|c_to:{referenced_column_name})</code></p> <p>In the above:</p> <ul> <li><code>algorithm_name</code>: <code>test_relationship</code> (only supported value now)</li> <li><code>contains_test_name</code>: Configure the test name (detected with <code>contains</code> logic). Default to <code>relationship</code></li> <li><code>c_from</code>: Configure the test metadata attribute (1) for the foreign key column name(s). If (1)'s value is multiple columns, it will concat them all   with <code>_and</code> wording       &gt; NOTE: It always looking at the <code>column_name</code> attribute firstly</li> <li><code>c_to</code>: Configure the test metadata attribute (2) for the referenced column name(s). If (2)'s value is multiple columns, it will concat them all with <code>_and</code> wording. Default to <code>field</code></li> </ul> <p>For example, if you would use <code>dbt-constraints</code> package</p> <p>The dbt-constraints package is using different name of test which is close to the contraint names, in this case, you would need to customize the input string here:</p> <pre><code>dbterd run \\\n--algo \"test_relationship:(name:foreign_key|c_from:fk_column_name|c_to:pk_column_name)\"\n</code></pre> <p>Examples:</p> CLICLI (long style)Use <code>foreign_key</code> test <pre><code>dbterd run -a test_relationship\n</code></pre> <pre><code>dbterd run --algo test_relationship\n</code></pre> <pre><code>dbterd run --algo \"test_relationship:(name:foreign_key|c_from:fk_column_name|c_to:pk_column_name)\"\n</code></pre>"},{"location":"nav/guide/cli-references.html#-manifest-version-mv","title":"--manifest-version (-mv)","text":"<p>Specified dbt manifest.json version</p> <p>Auto detect if not specified</p> <p>Examples:</p> CLICLI (long style) <pre><code>dbterd run --manifest-version 7\n</code></pre> <pre><code>dbterd run -mv 7\n</code></pre>"},{"location":"nav/guide/cli-references.html#-catalog-version-cv","title":"--catalog-version (-cv)","text":"<p>Specified dbt catalog.json version</p> <p>Auto detect if not specified</p> <p>Examples:</p> CLICLI (long style) <pre><code>dbterd run --catalog-version 7\n</code></pre> <pre><code>dbterd run -cv 7\n</code></pre>"},{"location":"nav/guide/cli-references.html#-resource-type-rt","title":"--resource-type (-rt)","text":"<p>Specified dbt resource type(seed, model, source, snapshot).</p> <p>Default to <code>[\"model\"]</code>, supports mulitple options</p> <p>Examples:</p> CLICLI (long style) <pre><code>dbterd run -rt model -rt source\n</code></pre> <pre><code>dbterd run --resource-type model\n</code></pre>"},{"location":"nav/guide/cli-references.html#debug","title":"debug","text":"<p>Shows hidden configured values</p> <p>Examples:</p> Output <pre><code>2023-04-08 10:15:03,611 - dbterd - INFO - Run with dbterd==0.2.0 (main.py:43)\n2023-04-08 10:15:03,612 - dbterd - INFO - **Arguments used** (main.py:52)\n2023-04-08 10:15:03,613 - dbterd - DEBUG - {\n    \"artifacts_dir\": \"C:\\\\Users\\\\DAT\\\\Documents\\\\Sources\\\\dbterd\\\\target\",\n    \"manifest_path\": null,\n    \"output\": \"C:\\\\Users\\\\DAT\\\\Documents\\\\Sources\\\\dbterd\\\\target\",\n    \"select\": null,\n    \"exclude\": null,\n    \"target\": \"dbml\",\n    \"algo\": \"test_relationship\",\n    \"manifest_version\": null,\n    \"resource_type\": [\n        \"model\"\n    ]\n} (main.py:53)\n2023-04-08 10:15:03,614 - dbterd - INFO - **Context used** (main.py:54)\n2023-04-08 10:15:03,614 - dbterd - DEBUG - {} (main.py:55)\n</code></pre>"},{"location":"nav/guide/targets/generate-d2.html","title":"Generate D2 ERD","text":""},{"location":"nav/guide/targets/generate-d2.html#1-install-d2-cli","title":"1. Install D2 CLI","text":"<pre><code># With --dry-run the install script will print the commands it will use\n# to install without actually installing so you know what it's going to do.\ncurl -fsSL https://d2lang.com/install.sh | sh -s -- --dry-run\n# If things look good, install for real.\ncurl -fsSL https://d2lang.com/install.sh | sh -s --\n</code></pre> <p>Check installations for more details</p>"},{"location":"nav/guide/targets/generate-d2.html#2-generate-d2-erd-content","title":"2. Generate D2 ERD content","text":"dbterd run -t d2 -ad \"samples/dbtresto\" -o \"target\" -s schema:dbt.mart 2023-05-06 08:17:54,413 - dbterd - INFO - Run with dbterd==?.?.? (main.py:54) 2023-05-06 08:17:54,715 - dbterd - INFO - target/output.d2 (base.py:75)"},{"location":"nav/guide/targets/generate-d2.html#2-export-to-svg","title":"2. Export to SVG","text":"d2 -w ./target/output.d2 ./target/output.svg"},{"location":"nav/guide/targets/generate-d2.html#3-embeded-into-markdown","title":"3. Embeded into Markdown","text":"<pre><code># Sample D2 ERD\n![d2](./target/output.svg)\n</code></pre> <p>Sample Output:</p> <p></p>"},{"location":"nav/guide/targets/generate-dbml.html","title":"Generate DBML","text":""},{"location":"nav/guide/targets/generate-dbml.html#1-produce-your-manifest-json","title":"1. Produce your manifest json","text":"<p>In your dbt project (I am using dbt-resto/integration_tests for demo purpose), try to build the docs:</p> dbt docs generate 01:40:58  Running with dbt=1.3.4 01:40:58  Partial parse save file not found. Starting full parse. 01:41:00  Found 0 models, 0 tests, 0 snapshots, 0 analyses, 356 macros, 1 operation, 0 seed files, 0 sources, 0 exposures, 0 metrics 01:41:00   01:41:00  Concurrency: 4 threads (target='postgres') 01:41:00   01:41:00  Done. 01:41:00  Building catalog 01:41:00  Catalog written to .\\target\\catalog.json"},{"location":"nav/guide/targets/generate-dbml.html#2-generate-dbml","title":"2. Generate DBML","text":"<p>Copy <code>manifest.json</code> and <code>catalog.json</code> into a specific folder OR do nothing and let's assume we're using <code>dbt/target</code> directory, and run</p> <p>Sample Usage</p> <p><code>dbterd run -ad \"/path/to/dbt/target\" -o \"/path/to/output\"</code></p> dbterd run -ad \"samples/dbtresto\" -s model.dbt_resto 2023-05-06 08:17:54,413 - dbterd - INFO - Run with dbterd==?.?.? (main.py:54) 2023-05-06 08:17:54,715 - dbterd - INFO - target/output.dbml (base.py:75) <p>File <code>./target/output.dbml</code> will be generated as the result</p>"},{"location":"nav/guide/targets/generate-dbml.html#3-build-database-docs-site-optional","title":"3. Build database docs site (Optional)","text":"<p>Assuming you're already familiar with dbdocs</p> <p>Sample Usage</p> <p><code>dbdocs build \"/path/to/output/output.dbml\"</code></p> dbdocs build \"./target/output.dbml\" \u221a Parsing file content ? Project name:  poc \u203c Password is not set for 'poc' \u221a Done. Visit: https://dbdocs.io/datnguye/poc <p>The site will be looks like:</p> <p></p> <p>Result after applied Model Selection: </p>"},{"location":"nav/guide/targets/generate-graphviz.html","title":"Generate GraphViz ERD","text":""},{"location":"nav/guide/targets/generate-graphviz.html#1-install-graphviz-cli","title":"1. Install GraphViz CLI","text":"<pre><code>sudo apt install graphviz\n</code></pre> <p>Check installations for more details</p>"},{"location":"nav/guide/targets/generate-graphviz.html#2-generate-graphviz-erd-content","title":"2. Generate GraphViz ERD content","text":"dbterd run -t graphviz -ad \"samples/dbtresto\" -s schema:dbt.mart 2023-05-06 08:17:54,413 - dbterd - INFO - Run with dbterd==?.?.? (main.py:54) 2023-05-06 08:17:54,715 - dbterd - INFO - target/output.graphviz (base.py:75)"},{"location":"nav/guide/targets/generate-graphviz.html#2-export-to-png","title":"2. Export to PNG","text":"dot -Tpng ./target/output.d2 &gt; ./target/output.png"},{"location":"nav/guide/targets/generate-graphviz.html#3-embeded-into-markdown","title":"3. Embeded into Markdown","text":"<pre><code># Sample GraphViz ERD\n![graphviz](./target/output.png)\n</code></pre> <p>Sample Output:</p> <p></p>"},{"location":"nav/guide/targets/generate-markdown-mermaid-erd.html","title":"Generate Markdown with Mermaid ERD inclusive","text":""},{"location":"nav/guide/targets/generate-markdown-mermaid-erd.html#1-generate-mermaid-erd-content","title":"1. Generate mermaid ERD content","text":"dbterd run -t mermaid -ad \"samples/dbtresto\" -s schema:dbt.mart 2023-05-06 08:17:54,413 - dbterd - INFO - Run with dbterd==?.?.? (main.py:54) 2023-05-06 08:17:54,715 - dbterd - INFO - target/output.md (base.py:75)"},{"location":"nav/guide/targets/generate-markdown-mermaid-erd.html#2-copy-mermaid-to-erdmd","title":"2. Copy mermaid to ERD.md","text":"<p>Linux/MacOs</p> <p>We'll use <code>echo</code> and <code>cat</code> to copy content over into the target Markdown file.</p> echo \\`\\`\\`mermaid          &gt;  ./samples/dbtresto/ERD.md echo ---                    &gt;&gt; ./samples/dbtresto/ERD.md echo title: Sample ERD      &gt;&gt; ./samples/dbtresto/ERD.md echo ---                    &gt;&gt; ./samples/dbtresto/ERD.md cat ./target/output.md      &gt;&gt; ./samples/dbtresto/ERD.md echo \\`\\`\\`                 &gt;&gt; ./samples/dbtresto/ERD.md"},{"location":"nav/guide/targets/generate-markdown-mermaid-erd.html#3-commit-it-and-check-it-on-github","title":"3. Commit it and check it on Github","text":"<p>Check out the sample output:</p> <p></p>"},{"location":"nav/guide/targets/generate-plantuml.html","title":"Generate PlantUML","text":""},{"location":"nav/guide/targets/generate-plantuml.html#1-generate-plantuml-erd-content","title":"1. Generate PlantUML ERD content","text":"dbterd run -t plantuml -ad \"samples/dbtresto\" -s schema:dbt.mart 2023-05-06 08:17:54,413 - dbterd - INFO - Run with dbterd==?.?.? (main.py:54) 2023-05-06 08:17:54,715 - dbterd - INFO - target/output.plantuml (base.py:75)"},{"location":"nav/guide/targets/generate-plantuml.html#2-wrapping-uml-up-to-the-web-server","title":"2. Wrapping UML up to the web server","text":"<ul> <li>Go to PlantUML Web Server</li> <li>Paste the PlantUML content generated as above</li> <li>Wait for a second and get the URL</li> </ul>"},{"location":"nav/guide/targets/generate-plantuml.html#3-embeded-the-plantuml-url-into-markdown","title":"3. Embeded the PlantUML URL into Markdown","text":"<pre><code>![](https://www.plantuml.com/plantuml/dpng/{your-hash})\n</code></pre>"},{"location":"nav/guide/targets/generate-plantuml.html#known-limitation","title":"Known Limitation\ud83d\udca1","text":"<ul> <li>Plant UML connectors seem not to support to indicate the columns which are related to the Relationship</li> <li>Left the question \"How to automate the markdown image URL generated?\" opened</li> </ul>"},{"location":"nav/metadata/ignore_in_erd.html","title":"Ignore Tests","text":""},{"location":"nav/metadata/ignore_in_erd.html#decide-to-exclude-relationship-tests-from-erd-generated","title":"Decide to exclude Relationship Tests from ERD generated","text":"<p>Add <code>ignore_in_erd</code> attribute into your test's meta: <pre><code>version: 2\n\nmodels:\n  - name: your_model\n    columns:\n      - name: your_column\n        tests:\n          - relationships_test:\n              to: ref('your_other_model')\n              field: your_other_column\n              meta:\n                ignore_in_erd: 1\n</code></pre></p> <p>Default value: <code>0</code> if the meta config is not specified</p>"},{"location":"nav/metadata/relationship_type.html","title":"Relationship Types","text":""},{"location":"nav/metadata/relationship_type.html#decide-to-enforce-relationship-type","title":"Decide to enforce Relationship Type","text":"<p>Add <code>relationship_type</code> attribute into your test's meta:</p> <pre><code>version: 2\n\nmodels:\n  - name: your_model\n    columns:\n      - name: your_column\n        tests:\n          - relationships_test:\n              to: ref('your_other_model')\n              field: your_other_column\n              meta:\n                relationship_type: many-to-one\n</code></pre> <p>Default value: <code>many-to-one</code> if the meta config is not specified</p> <p>List of accepted values:</p> Relationship Type Programatic Symbol one-to-many 1n zero-to-many 0n many-to-many nn one-to-one 11 many-to-one n1 Not specified/Invalid value n1 <p>NOTE: Known as we could configure multiple relationship types but in the best practice we should always have <code>many-to-one</code></p>"}]}